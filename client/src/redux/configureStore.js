import { createStore } from 'redux';

//import the root reducer
import rootReducer from './reducers';

const defaultState = {
    books: []
};

const store = createStore(
    rootReducer, defaultState
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;