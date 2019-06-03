import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { createHistory as history } from 'history';

// Components and Containers
import App from './components/app.jsx';
import CarsIndex from './containers/cars_index.jsx';
import CarsShow from './containers/cars_show.jsx';

// DB
import cars from './data/cars.js';

// Initial State
const garageName = 'garage1';
const initialState = {
  cars: cars
};

//Import reducers
import carsReducer from './reducers/cars_reducer.js';
const reducers = combineReducers({
 cars: carsReducer
});

// Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(logger, reduxPromise))

// Stylesheets
import '../assets/stylesheets/application.scss';

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middleware)}>
    <Router history={history}>
      <Switch>
        <Route path="/cars" exact component={CarsIndex}/>
        <Route path="/cars/:id" component={CarsShow}/>
        <Redirect from="/" to="/cars"/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
