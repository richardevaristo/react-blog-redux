import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger';

import BlogReducer from './reducers/BlogReducer'

const Store = createStore(
    combineReducers({
        BlogReducer,
    }),
    {},
    applyMiddleware(createLogger())
);

Store.subscribe(() => {
    console.log('Store Updated', Store.getState());
})

export default Store