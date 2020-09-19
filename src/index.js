import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//包含关系
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById('root'));

//一般无需继承