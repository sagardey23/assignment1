import React from 'react';
import './compStyle.css';

const greeting ={
    color:'blue'
}

function Funcomp () {
    return (
        <div className='parent'>
            <div className='container1'>
                <h1> This is created using function component </h1>
                <p> This is done using external CSS</p>
                <p style={greeting}> This is done using inline CSS</p>

            </div>
        </div>
    )
}

export default Funcomp;