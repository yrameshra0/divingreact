import TodosReducer from './reducer_todos';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    todos: TodosReducer
});

export default rootReducer;