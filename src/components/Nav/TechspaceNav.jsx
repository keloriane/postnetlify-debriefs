import React from 'react';
import { Link } from "react-router-dom";

export const TechspaceNav = (props) => {
    return (
        <div>
            <div className="navigation">
            <nav>
                <Link to="/techspace/histoire" onClick={props.animation}>Notre Histoire</Link>
                <Link to="/techspace/digital-career" onClick={props.animation1} >digital career center</Link>
                <Link to="/" onClick={props.animation2} >l'Agence</Link>
            </nav>
            </div>
        </div>
    )
}
