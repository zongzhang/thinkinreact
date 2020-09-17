import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//元素 不可变
// const element2 = <h1>Hello, world2</h1>;
//
// ReactDOM.render(element2, document.getElementById('root2'));


function tick() {
    const element = (
        <div>
            <h1>hello,world</h1>
            <h2>it is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);



