import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";
import { getCurrentUser } from "../../utils";
export const NavbarHeader = () => {
  const currentUser = getCurrentUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Sample Dashboard
        </Navbar.Brand>
        <div className="user-info">
          {currentUser && (
            <div className="loggedin-username mr-2">{currentUser.username}</div>
          )}
          {currentUser && (
            <button
              className="btn btn-outline-light"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
