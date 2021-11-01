import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
    return(
        <nav className="navbar">
            <h1>INICIO</h1>
            <section className="links">
             <button onClick={props.onLogout}>Back</button>
            </section>
        </nav>
    );
};


export default NavBar;