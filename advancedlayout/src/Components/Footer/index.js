import React from "react"
// import react-dom from "react-dom"
import './style.css';
import shared from '../../shared_studios.png';

function Footer() {
    return (

        <div className="footer">
            <p className="shared_icon">Powered By<img className="shared_styles" alt="shared" src={shared}></img></p>
            <p className="copyright">CIIS 2020</p>
        </div>
        // <div className="copyright">
        //     Hello
        // </div>





    );
}

export default Footer;
