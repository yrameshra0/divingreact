import React, {Component} from 'react';
import TodoCreator from '../containers/TodoCreator';
import TodoList from '../containers/TodoList';

export default () => {
    return (
        <div>
            <TodoCreator/>
            <br/>
            <TodoList/>
        </div>
    );
};