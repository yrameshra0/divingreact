import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {
    sendChecked = (index) => {
        console.log(`checked state -- ${index}`);
    };

    render() {
        return (
            <ul className="todos-list">
                {this.props.todos.map((item, index) => <li key={index}>
                    <input onChange={this.sendChecked(index)} type="checkbox"/>
                    {item.content}
                </li>)}
            </ul>
        );
    }
}

function mapStateToProps({todos}) {
    return {todos};
}

export default connect(mapStateToProps)(TodoList);