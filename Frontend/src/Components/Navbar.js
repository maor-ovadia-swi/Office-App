import React, { useState } from "react";
import './Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder"

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false)
    return(
        <div className="Navbar">
            <a className="solarwindsLogo" href="/">
                <img data-t="width,height,src:svgImgPath,alt" src="https://techmonitor.ai/wp-content/uploads/sites/20/2021/04/solarwinds-logo.png" alt="SolarWinds Logo"></img>
            </a>
            <div className="links" id={showLinks ? "hidden" : ""}>
                <a href="/employee_equipments">Employee Equipments</a>
                <a href="/office_days">Office Days</a>
            </div>
            <button onClick={() => setShowLinks(!showLinks)}>
                {" "}
                <ReorderIcon />
            </button>
        </div>
    )

}


export default Navbar;
