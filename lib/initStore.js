import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createRootReducer from './store/rootReducer';

const initialState = {};

const rootReducer = createRootReducer();

export const initializeStore = (preloadedState = initialState) => {
	return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
};
