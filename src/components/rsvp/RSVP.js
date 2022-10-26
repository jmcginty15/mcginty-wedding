import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import findNames from "../../utils/findNames";
import "./RSVP.css";

const RSVP = () => {
  const [kids, setKids] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedPlusOne, setSelectedPlusOne] = useState(null);
  const [personConfirmed, setPersonConfirmed] = useState(true);
  const [plusOneConfirmed, setPlusOneConfirmed] = useState(true);
  const [selected, setSelected] = useState(null);
  const [sheetData, setSheetData] = useState(null);
  const [results, setResults] = useState(null);
  const [searching, setSearching] = useState(false);
  const [name, setName] = useState("");
  const handleChange = (evt) => setName(evt.target.value);
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setSearching(true);

    if (sheetData) setResults(findNames(name, sheetData));
    else {
      const res = await axios.get(
        "https://sheet.best/api/sheets/f1ed531a-214e-46ed-b398-4ea993f49796"
      );
      setResults(findNames(name, res.data));
      setSheetData(res.data);
    }
  };

  const handleClick = () => {
    setName("");
    setSearching(false);
    setResults(null);
    setSelected(null);
    setSelectedPerson(null);
    setSelectedPlusOne(null);
    setPersonConfirmed(true);
    setPlusOneConfirmed(true);
    setSubmitted(false);
  };

  const handleEnter = () => {
    let selectedRow = results.length === 1 ? results[0] : null;
    if (!selectedRow)
      for (let result of results)
        if (result.id === selected) {
          selectedRow = result;
          break;
        }

    let plusOne = null;
    for (let result of sheetData)
      if (result.id === selectedRow.plusOne) {
        plusOne = result;
        break;
      }

    setSelectedPerson(selectedRow);
    setSelectedPlusOne(plusOne);

    let kidCount = 0;
    if (selectedRow.kids)
      kidCount =
        selectedRow.kids === "refPlusOne"
          ? parseInt(plusOne.kids)
          : parseInt(selectedRow.kids);

    if (kidCount !== kids) setKids(kidCount);
    if (selectedRow.status === "N") setPersonConfirmed(false);
    if (selectedRow.plusOneStatus === "N") setPlusOneConfirmed(false);
  };

  const handleConfirm = async () => {
    setSubmitting(true);

    await axios.patch(
      `https://sheet.best/api/sheets/f1ed531a-214e-46ed-b398-4ea993f49796/id/${selectedPerson.id}`,
      {
        status: personConfirmed ? "Y" : "N",
        plusOneStatus: plusOneConfirmed ? "Y" : "N",
        kids: `${kids}`,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    if (selectedPlusOne)
      await axios.patch(
        `https://sheet.best/api/sheets/f1ed531a-214e-46ed-b398-4ea993f49796/id/${selectedPlusOne.id}`,
        {
          status: plusOneConfirmed ? "Y" : "N",
          plusOneStatus: personConfirmed ? "Y" : "N",
          kids: "refPlusOne",
        },
        { headers: { "Content-Type": "application/json" } }
      );

    setSubmitting(false);
    setSubmitted(true);

    const res = await axios.get(
      "https://sheet.best/api/sheets/f1ed531a-214e-46ed-b398-4ea993f49796"
    );
    setSheetData(res.data);
  };

  const handleKidsChange = (evt) => setKids(parseInt(evt.target.value));

  return (
    <div className="RSVP">
      <h1 className="RSVP-title">RSVP</h1>
      {submitted ? (
        <div className="RSVP-response-container">
          <h6 className="RSVP-thank-you">Thank you for your response!</h6>
          <Button
            className="RSVP-button-outline"
            type="button"
            onClick={handleClick}
          >
            Back to Search
          </Button>
        </div>
      ) : (
        <div>
          {selectedPerson ? (
            <div className="RSVP-response-container">
              <div className="RSVP-response">
                <h6>How would you like to RSVP?</h6>
                <div className="RSVP-response-card">
                  <div>
                    <FontAwesomeIcon icon={faCircleUser} />{" "}
                    {selectedPerson.name}
                  </div>
                  <div className="RSVP-response-button-container">
                    <Button
                      className={`RSVP-button-response${
                        personConfirmed ? "" : "-outline"
                      }`}
                      size="sm"
                      onClick={() => setPersonConfirmed(true)}
                    >
                      Yes
                    </Button>
                    <Button
                      className={`RSVP-button-response${
                        personConfirmed ? "-outline" : ""
                      }`}
                      size="sm"
                      onClick={() => setPersonConfirmed(false)}
                    >
                      No
                    </Button>
                  </div>
                </div>
                <div className="RSVP-response-card">
                  <div>
                    <FontAwesomeIcon icon={faCircleUser} />{" "}
                    {selectedPlusOne
                      ? selectedPlusOne.name
                      : `${selectedPerson.name}'s Guest`}
                  </div>
                  <div className="RSVP-response-button-container">
                    <Button
                      className={`RSVP-button-response${
                        plusOneConfirmed ? "" : "-outline"
                      }`}
                      size="sm"
                      onClick={() => setPlusOneConfirmed(true)}
                    >
                      Yes
                    </Button>
                    <Button
                      className={`RSVP-button-response${
                        plusOneConfirmed ? "-outline" : ""
                      }`}
                      size="sm"
                      onClick={() => setPlusOneConfirmed(false)}
                    >
                      No
                    </Button>
                  </div>
                </div>
                <div className="RSVP-kids-container">
                  <h6 id="RSVP-number-label">
                    How many kids will you be bringing?
                  </h6>
                  <Input
                    id="RSVP-number-input"
                    type="number"
                    min="0"
                    value={kids}
                    onChange={handleKidsChange}
                  />
                </div>
              </div>
              {submitting ? (
                <div className="RSVP-searching">Submitting...</div>
              ) : (
                <div>
                  <Button
                    className="RSVP-button"
                    type="button"
                    onClick={handleConfirm}
                  >
                    Confirm
                  </Button>
                  <Button
                    className="RSVP-button-outline"
                    type="button"
                    onClick={handleClick}
                  >
                    Back to Search
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div>
              {results === null ? (
                <Form className="RSVP-form" onSubmit={handleSubmit}>
                  <FormGroup>
                    <Input
                      required
                      type="text"
                      name="firstName"
                      placeholder="Search your name..."
                      autoComplete="off"
                      onChange={handleChange}
                      value={name}
                    />
                  </FormGroup>
                  {searching ? (
                    <div className="RSVP-searching">Searching...</div>
                  ) : (
                    <Button className="RSVP-button" type="submit">
                      Search
                    </Button>
                  )}
                </Form>
              ) : (
                <div className="RSVP-results">
                  {results.length ? (
                    <div>
                      {results.length === 1 ? (
                        <div className="RSVP-results-single">
                          <h6>Is this you?</h6>
                          <div className="RSVP-results-card-single">
                            <FontAwesomeIcon icon={faCircleUser} />{" "}
                            {results[0].name}
                          </div>
                        </div>
                      ) : (
                        <div className="RSVP-results-multiple">
                          <h6>Which one is you?</h6>
                          {results.map((result) => (
                            <div
                              key={result.id}
                              className={`RSVP-results-card-${
                                result.id === selected ? "selected" : "multiple"
                              }`}
                              onClick={() => setSelected(result.id)}
                            >
                              <FontAwesomeIcon icon={faCircleUser} />{" "}
                              {result.name}
                            </div>
                          ))}
                        </div>
                      )}
                      <Button
                        className={"RSVP-button"}
                        type="button"
                        disabled={!selected && results.length > 1}
                        onClick={handleEnter}
                      >
                        {results.length === 1 ? "Yes" : "Proceed"}
                      </Button>
                      <Button
                        className="RSVP-button-outline"
                        type="button"
                        onClick={handleClick}
                      >
                        Back to Search
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <h3>No results found!</h3>
                      <h6>
                        Make sure you spelled the name correctly. If it's
                        spelled correctly and you still can't find your
                        invitation, call or text (785) 213-1247 to RSVP.
                      </h6>
                      <Button
                        className="RSVP-button"
                        type="button"
                        onClick={handleClick}
                      >
                        Back to Search
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RSVP;
