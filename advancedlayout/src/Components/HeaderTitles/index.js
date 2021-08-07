import React from "react"
// import react-dom from "react-dom"
import './style.css';
import logo from '../../logo.png';

function Header() {
    return (

        <div className="styleslandingpage">
            <div className="styles_header">
                <p className="styles_title">CIIS 52ND ANNUAL</p>
                <p className="styles_title">COMMENCEMENT CEREMONY</p>
                <p className="styles_date">SATURDAY, 30TH OF MAY 2020</p>
                <img className="styles_logo" alt="logo" src={logo} height="30" />
            </div>
        </div>





    );
}

export default Header;