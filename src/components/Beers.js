
import React, { Component } from 'react';
import './Beers.css'
import Nav from './Nav';

import {
    Link
} from "react-router-dom";

class Beers extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json }, () => console.log(this.state.data))
            })


    }



    render() {
        return (
            <div className="all">
                {this.state.data.map((elem, i) =>
                    <div key={i} className="item">
                        <img src={elem.image_url} alt="" />
                        <div>
                            <h2>{elem.name}</h2>
                            <h3> {elem.tagline}</h3>
                            <p>Created by: {elem.contributed_by}</p>
                            <Link to={`/beers/${elem._id}`}>Details</Link>
                        </div>

                    </div>)}
                <Nav />
            </div>
        );
    }
}

export default Beers;