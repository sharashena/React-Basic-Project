import React, { Component } from 'react';
import Navbar from './Navbar';
import Tours from './Tours';
import ToursData from './tourData';

export default class Sections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ToursData
        }
    }

    deleteTour = (id) => {
        const listOfTours = this.state.data.filter((item) => item.id !== id);
        this.setState({
            data : listOfTours
        })
    }
    render() {
        return (
            <>
                <Navbar />
                {this.state.data.map((elem) => (
                    <Tours Tours={elem} key={elem.id} deleteTour={this.deleteTour}/>
                ))}
            </>
        )
    }
}