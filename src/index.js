import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}


const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById('root'));
