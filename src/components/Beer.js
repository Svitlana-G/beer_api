import React, { Component } from 'react';
import './Beer.css'
import { Link } from "react-router-dom";

class Beer extends Component {
    state = {}

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    render() {
        return (
            <div className="ersteSeite">
                <div className="picture" id="all"></div>
                <Link to="/beers"><h1>All Beers</h1></Link>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique totam voluptas eum ratione doloremque illo sit unde inventore eos veniam quae nemo non amet praesentium nihil magni, tempore cum voluptates mollitia? Quasi tenetur quia, esse maxime voluptate soluta commodi cumque id alias asperiores suscipit doloremque temporibus aliquam aperiam, dicta laboriosam?</p>

                <div className="picture" id="rand"></div>
                <Link to="/beers/random"> <h1>Random Beer</h1></Link>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique totam voluptas eum ratione doloremque illo sit unde inventore eos veniam quae nemo non amet praesentium nihil magni, tempore cum voluptates mollitia? Quasi tenetur quia, esse maxime voluptate soluta commodi cumque id alias asperiores suscipit doloremque temporibus aliquam aperiam, dicta laboriosam?</p>
            </div>
        );
    }
}

export default Beer;