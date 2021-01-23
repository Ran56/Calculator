import React, { Component } from 'react';

class FinalResult extends Component {
    render() {
        return (
            <div className="result">
                <h>{this.props.result}</h>
            </div>
        );
    }
}

export default FinalResult;