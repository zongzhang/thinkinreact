import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {
    firstName: 'Hello',
    lastName: 'World',
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const element = (
    <h1>haha, {formatName(user)}</h1>
)
ReactDOM.render(
    element,
    document.getElementById('root')
);
