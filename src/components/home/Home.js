import main from "./st-james-interior.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Home-title">The Sacrament of Marriage</h1>
      <div className="Home-tagline-container">
        <h3 className="Home-tagline">February 5, 2023</h3>
        <h3 className="Home-tagline">Stillwater, Oklahoma</h3>
      </div>
      <div
        className="Home-image"
        style={{ backgroundImage: `url(${main})` }}
      ></div>
      <h2 className="Home-subtitle">Wedding Details</h2>
      <div className="Home-details">
        <div className="Home-details-title">Date:</div>
        <div className="Home-details-description">February 5, 2023</div>
        <div className="Home-details-title">Time:</div>
        <div className="Home-details-description">3pm</div>
        <div className="Home-details-title">Location:</div>
        <div className="Home-details-description">
          St James Orthodox Christian Church
          <br />
          826 S Hall St
          <br />
          Stillwater, OK 74074
        </div>
        <div className="Home-details-title">RSVP:</div>
        <div className="Home-details-description">
          Please RSVP by January 4. To do so,{" "}
          <a className="Home-link" href="/rsvp">
            click here
          </a>
          , mail your RSVP card to the below address, or call or text (785)
          213-1247.
          <br />
          <br />
          Jason McGinty
          <br />
          2113 SW Potomac Dr Apt 6
          <br />
          Topeka, KS 66611
        </div>
        <div className="Home-details-title">Attire:</div>
        <div className="Home-details-description">
          Sunday best. Be sure to wear comfortable shoes for standing, as there
          will be limited seating in the church primarily for the elderly and
          handicapped. The ceremony should last around half an hour.
        </div>
        <div className="Home-details-title">Service information:</div>
        <div className="Home-details-description">
          In addition to the wedding ceremony at 3pm, there will be Orthros at
          9am followed by Divine Liturgy at 10am, also at St James. These are
          the usual services offered every Sunday by Orthodox Christians and are
          not directly part of the wedding ceremony, but all are welcome to
          attend if desired.
          <br />
          <br />
          If you've never been to an Orthodox Christian wedding, it may be quite
          a bit different from what you'll be expecting!{" "}
          <a className="Home-link" href="/orthodox-wedding">
            Click here
          </a>{" "}
          for an explanation of the ceremony and the significance of everything
          that happens in it.
        </div>
        <div className="Home-details-title">Reception:</div>
        <div className="Home-details-description">
          All are invited to a reception immediately following the ceremony at
          Starlight Terrace, Room 465 of the Oklahoma State University Student
          Union building at the below address. There will be a buffet-style meal
          and a full bar, and your kids are welcome to join.
          <br />
          <br />
          Oklahoma State University Student Union
          <br />
          100 S Hester St
          <br />
          Stillwater, OK 74078
        </div>
        <div className="Home-details-title">Accommodations:</div>
        <div className="Home-details-description">
          We have reserved a block of rooms at the Atherton Hotel at the below
          address. The hotel is connected to the OSU Student Union where the
          reception will be held. To reserve a room, call the front desk at
          (405) 372-2445 and let them know you would like a room for the McGinty
          wedding. Rooms are reserved until January 4 and are available on a
          first-come first-served basis.
          <br />
          <br />
          The Atherton Hotel at Oklahoma State University
          <br />
          H103 Student Union Blvd
          <br />
          Stillwater, OK 74078
          <br />
          <br />
          For those who will need to fly in, the nearest airport is Will Rogers
          Airport in Oklahoma City, a little over 1 hour from the church.
        </div>
        {/* <div className="Home-details-title">Participants:</div>
        <div className="Home-details-description">
          Fr Mark Wallace - Parish Priest, St James, Stillwater, Oklahoma
          <br />
          Fr Nikolai Myers - Parish Priest, Ss Peter & Paul, Topeka, Kansas
          <br />
          <br />
          <b>Bridesmaids</b>
          <br />
          Maid of Honor
          <br />
          Riley Hambrick
          <br />
          Evan Hambrick
          <br />
          Ruby Pendergraft
          <br />
          <br />
          <b>Groomsmen</b>
          <br />
          Mike McClendon - Best Man
          <br />
          Michael Autery
          <br />
          Dan Kuerbitz
          <br />
          Zach McGinty
        </div> */}
      </div>
    </div>
  );
};

export default Home;
