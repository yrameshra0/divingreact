import React, {Component} from 'react';
import TodoForm from '../containers/todo_form';
import TodoList from '../containers/todo_list';

export default () => {
    return (
        <div>
            <TodoForm/>
            <br/>
            <TodoList/>
        </div>
    );
};