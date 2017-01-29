import React, {Component} from 'react';
import {createNewTodo} from '../actions';
import {connect} from 'react-redux';

class TodoCreator extends Component {
    constructor(props) {
        super(props);

        this.state = this.todoStateObject('');
    }

    todoStateObject = (content) => {
        return {todoContent: content}
    };

    updateTodoContent = (event) => {
        this.setState(this.todoStateObject(event.target.value));
    };

    addTodoContent = (event) => {
        event.preventDefault();

        this.props.createNewTodo(this.state.todoContent);
        this.setState(this.todoStateObject(''));
    };

    render() {
        return (<form onSubmit={this.addTodoContent} className="input-group">
            <input className="form-control"
                   placeholder="What you want to-do?"
                   value={this.state.todoContent}
                   onChange={this.updateTodoContent}/>
            <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Add To-Do</button>
            </span>
        </form>);
    }
}

export default connect(null, {createNewTodo})(TodoCreator);