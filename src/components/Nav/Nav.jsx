import React from 'react'
import "./nav.scss";
import { Link} from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav className="home-nav">
            <ul>
                <li><Link to="/" onClick={props.animation}>ACCUEIL</Link></li>
                <li><Link to="/services" onClick={props.animation0}>SERVICES</Link></li>
                <li><Link to="/webinaire" onClick={props.animation1}>WEBINAIRE</Link></li>
                <li><Link to="/techspace" onClick={props.animation2}>TECHSPACE</Link></li>
                <Link to="/blog" onClick={props.animation3}><li><button> BLOG </button></li></Link>
            </ul>
        </nav>

    )
}
export default Nav;