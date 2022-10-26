import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todoReducer } from './reducers/todoReducer';
import { tabReducer } from './reducers/tabReducer.js';

const reducer = combineReducers({
  todo: todoReducer,
  tab: tabReducer
});


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;