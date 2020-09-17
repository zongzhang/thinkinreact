import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//不要直接修改 State
//State 的更新可能是异步的
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //生命周期方法
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

function tick() {
    ReactDOM.render(
        <Clock/>,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
