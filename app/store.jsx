import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk


export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

//export action creators
export * from './reducers/campuses';
export * from './reducers/students';
export * from './reducers/singleStudent';
export * from './reducers/deleteCampus';
export * from './reducers/editCampus';
export * from './reducers/createCampus';
export * from './reducers/deleteStudent';
export * from './reducers/createStudent';
