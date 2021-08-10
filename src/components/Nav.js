import './Nav.css'

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div id="nav">

            <Link to="/">
                <img src="/Logo.svg" alt="Nichts" />
            </Link>

        </div>
    );
}

export default Nav;