import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectGarage } from '../actions/actions.js';

// Router
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { createHistory as history } from 'history';

// Containers
import CarsIndex from './cars_index.jsx';

class Aside extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.garages.map( (garage, index) => {
            return <li key={index + 1}><a href={`/${garage}`}>{garage}</a></li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    garages: state.garages
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { },
  dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
