import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { createHistory as history } from 'history';

// Middleware
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(logger, reduxPromise))

// Components and Containers
import CarsIndex from './containers/cars_index.jsx';
import CarsShow from './containers/cars_show.jsx';
import CarsNew from './containers/cars_new.jsx';

// DB
import testData from './data/cars.js';

// Initial State
const garageList = ['ahab-and-sons', 'slimboy'];
const initialState = {
  cars: undefined,
  garages: garageList,
};

//Import reducers
import carsReducer from './reducers/cars_reducer.js';
import garageReducer from './reducers/garage_reducer.js';
const reducers = combineReducers({
 cars: carsReducer,
 garages: garageReducer,
 form: formReducer
});

// Stylesheets
import '../assets/stylesheets/application.scss';

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middleware)}>
    <Router history={history}>
      <ul>
        {garageList.map( (garage, index) => {
          return <li key={index + 1}><Link to={`${garage}`}>{garage}</Link></li>
        })}
      </ul>
      <Switch>
        <Route exact path="/:garage" component={CarsIndex}/>
        <Redirect from='/' to='/slimboy'/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
