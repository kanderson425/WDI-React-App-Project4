import React, { Component } from 'react';
import './Default.css';

class Default extends Component {
    render() {
        return (
            <React.Fragment>
                <p class="center">Space Invadors destroyed this page! Take revenge on them!
  <br/> Use <span class="label label-danger">Space</span> to shoot and <span class="label label-danger">←</span>&#160;<span class="label label-danger">→</span> to move!&#160;&#160;&#160;<button class="btn btn-default btn-xs" id="restart">Restart</button></p>

<canvas id="space-invaders"/>

            </React.Fragment>
        );
    }
}

export default Default;