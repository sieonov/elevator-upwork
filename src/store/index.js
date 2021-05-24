import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = (initialState, history) => {
  const sagaMiddleware = createSagaMiddleware();
  // const loggerMiddleware = createLogger();

  const composeEnhancers =
    typeof window === 'object'
      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;
  const middleware = composeEnhancers(applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history)
  ));

  const store = createStore(
    rootReducer,
    middleware
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
