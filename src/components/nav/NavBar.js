import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <div className="NavBar">
      <Navbar id="Nav" expand="lg" fixed="top">
        <NavbarBrand href="/" id="brand-logo-container">
          Addie & Jason
        </NavbarBrand>
        <NavbarToggler onClick={toggleOpen} />
        <Collapse isOpen={open} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => navigate("/", false)}>
                <span className="NavBar-link">Home</span>
              </NavLink>
            </NavItem>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => navigate("/rsvp", false)}>
                <span className="NavBar-link">RSVP</span>
              </NavLink>
            </NavItem>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => navigate("/registry", false)}>
                <span className="NavBar-link">Registry</span>
              </NavLink>
            </NavItem>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => navigate("/photos", false)}>
                <span className="NavBar-link">Photos</span>
              </NavLink>
            </NavItem>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => navigate("/travel", false)}>
                <span className="NavBar-link">Travel</span>
              </NavLink>
            </NavItem>
            <NavItem className="NavBar-item">
              <NavLink onClick={() => navigate("/orthodox-wedding", false)}>
                <span className="NavBar-link">The Orthodox Wedding</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
