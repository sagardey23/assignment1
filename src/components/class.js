import React, { Component } from 'react';
import './compStyle.css';

const styling = {
    color:'red'
}

export default class Clscomp extends Component {
    render() {
        return (
            <div className='parent'>
                <div className='container'>
                    <h1>This is created using class component</h1>
                    <p>This is done using external CSS</p>
                    <p style={styling}> This is done using inline CSS</p>
                </div>
            </div>
        )
    }
}