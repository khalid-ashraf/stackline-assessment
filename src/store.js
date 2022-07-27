import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import salesReducer from './store_modules/sales_module/salesReducer';

const reducer = combineReducers({
  salesReducer,
});

export default createStore(reducer, applyMiddleware(thunk));
