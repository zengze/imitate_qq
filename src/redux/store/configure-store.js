import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(rootReducer, initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
