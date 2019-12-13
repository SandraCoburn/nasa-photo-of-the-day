import React from "react";
import { Nav, NavItem, NavLink} from "reactstrap";

   const NavBar = () => {

    return(
        <div>
            <Nav>
           <NavItem>
            <NavLink href="https://www.nasa.gov/multimedia/videogallery/index.html">Nasa Videos</NavLink>
            <NavLink href="https://www.nasa.gov/multimedia/imagegallery/index.html">Image Gallerie</NavLink>
           </NavItem>
           </Nav>
           <hr />
            
           
        </div>
    )
}

export default NavBar;