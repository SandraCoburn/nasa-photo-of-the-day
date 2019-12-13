import React from "react";
import { Navbar, NavbarText, NavLink, Nav } from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="xs">
        <NavbarText>Links to Nasa Website:</NavbarText>
        <NavLink href="https://www.nasa.gov/multimedia/videogallery/index.html">
          Nasa Videos
        </NavLink>
        <NavLink href="https://www.nasa.gov/multimedia/imagegallery/index.html">
          Image Gallerie
        </NavLink>
      </Navbar>
    </div>
  );
};

export default NavBar;
