import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {
    firstName: 'harper',
    lastName: 'perez',
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const element = (
    <h1>Hello, {formatName(user)}</h1>
)
ReactDOM.render(
    element,
    document.getElementById('root')
);
