import './Nav.css'

import {
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <div id="nav">

            <Link to="/beer">
                <div id="circle"></div>
            </Link>

        </div>
    );
}

export default Nav;