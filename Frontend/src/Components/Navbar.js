import React, { useState } from "react";
import './Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder"

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false)
    return(
        <div className="Navbar">
            <img className="solarwindsLogo" data-t="width,height,src:svgImgPath,alt" src="https://techmonitor.ai/wp-content/uploads/sites/20/2021/04/solarwinds-logo.png" alt="SolarWinds Logo"></img>
            <div className="links" id={showLinks ? "hidden" : ""}>
                <a href="/Home">Employee Equipment</a>
                <a href="/Home">Office Days</a>
            </div>
            <button onClick={() => setShowLinks(!showLinks)}>
                {" "}
                <ReorderIcon />
            </button>
        </div>
    )

}


export default Navbar;
