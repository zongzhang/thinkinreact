import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//函数组件
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

// 元素是用户自定义组件
const element = <Welcome name="Sara"/>;

function App() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
