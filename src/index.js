import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault
// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked.');
//     }
//
//     return (
//         <a href="#" onClick={handleClick}>
//             Click me
//         </a>
//     );
// }

// 在 JavaScript 中，class 的方法默认不会绑定 this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。

//向事件处理程序传递参数
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
//在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。
// 如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。

const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById('root'));
