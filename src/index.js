import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//受控组件
//在 HTML 中，表单元素（如<input>、 <textarea> 和 <select>）通常自己维护 state，并根据用户输入进行更新。
// 而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。
// 我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。
// 被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

ReactDOM.render(<NameForm/>, document.getElementById("root"));
//如果你想寻找包含验证、追踪访问字段以及处理表单提交的完整解决方案，
// 使用 Formik 是不错的选择。然而，它也是建立在受控组件和管理 state 的基础之上 —— 所以不要忽视学习它们。