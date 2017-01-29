import React, {Component} from 'react';
import {connect} from 'react-redux';
import Checkbox from '../components/checkbox';
import {toggleDone} from '../actions';

class TodoList extends Component {
    toggleCompletedTodos = (index) => this.props.toggleDone(index);

    renderTodoText = (item) => {
        if (!item.done)
            return item.content;

        return <strike>{item.content}</strike>
    };

    render() {
        return (
            <ul className="todos-list">
                {this.props.todos.map((item, index) => <li key={index}>
                    <Checkbox handleCheckboxChange={this.toggleCompletedTodos} info={index} done={item.done}/>
                    {this.renderTodoText(item)}
                </li>)}
            </ul>
        );
    }
}

function mapStateToProps({todos}) {
    return {todos};
}

export default connect(mapStateToProps, {toggleDone})(TodoList);