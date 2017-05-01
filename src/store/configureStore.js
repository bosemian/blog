import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import {logger} from 'redux-logger';
import rootReducers from '../reducers';
export default () => {
    
    const middlewares = [thunk]
    if (process.env.NODE_ENV === `development`) {
        middlewares.push(logger);
    }

    const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducers);
    
    return store
   
}