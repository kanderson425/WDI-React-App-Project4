import React, { Component } from 'react';
import './Default.css';
import DeadInsideGif from '../../img/Dead_Inside.gif';

class Default extends Component {
    render() {
        return (
            <React.Fragment className="defaultLandPage">
                <img className="deadInsideGif" src={DeadInsideGif} alt="ERROR" />
            </React.Fragment>
        );
    }
}

export default Default;