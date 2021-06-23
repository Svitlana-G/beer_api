
import React, { Component } from 'react';
import './Beeritem.css'
import Nav from './Nav';
import { Link } from "react-router-dom";

class BeerItem extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        // console.log(this.props.match.params.myId)
        let id = this.props.match.params.myId
        // console.log(id)

        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json })
            })
    }

    render() {
        return (
            <div id="item">
                <div className="single">
                    <img src={this.state.data.image_url} alt="" />
                    <h2>{this.state.data.name}</h2>
                    <h3>{this.state.data.tagline}</h3>
                    <div className="flex-row">
                        <div>First brewed:</div>
                        <div>{this.state.data.first_brewed} </div>
                    </div>
                    <div className="flex-row">
                        <div>Attenualtion level:</div>
                        <div> {this.state.data.attenuation_level}</div>
                    </div>

                    <p>{this.state.data.description}</p>
                    {/* {this.state.data.contributed_by} */}
                    <div id="link">
                        <Link to="/beers">
                            <div id="circle-gelb">
                                <div>&#11013;</div>
                            </div>
                            {/* <img src="icons.png" alt="Nichts" /> */}
                        </Link>
                    </div>
                </div>


                <Nav />
            </div>
        );
    }
}

export default BeerItem;