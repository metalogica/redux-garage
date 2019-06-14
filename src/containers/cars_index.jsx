// Core modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// Actions
import { listCars, deleteCar } from '../actions/actions.js';
// Router
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { createHistory as history } from 'history';
// Child Containers
import CarsShow from './cars_show.jsx';
import CarsNew from './cars_new.jsx';
import Navbar from './navbar.jsx';

class CarsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentWillMount() {
    this.props.listCars(this.props.match.url);
  }

  // Wil lre-render the index component when the path changes
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.url != this.props.match.url) {
      this.props.listCars(this.props.match.url);
    }
  }

  handleClick = (id) => {
    this.props.deleteCar(id, () => {
      // this.props.history.push("");
      location.reload();
    })
  }

  renderCar({id, brand, model, owner, plate}) {
    return (
      <ul key={id}>
        <li>Brand: {brand}</li>
        <li>Model: {model}</li>
        <li>Owner: {owner}</li>
        <li>Plate: {plate}</li>
        <Link to={`${this.props.match.url}/${id}`} key={id}>Find out more</Link>
        <a onClick={ () => this.handleClick(id) }>Delete Car</a>
      </ul>
    )
  }

  render() {
    if (this.state.hasError) {
      console.log(error)
      return <h1>Something went wrong.</h1>
    }
    return (
      <Router>
        <div>
          <Link to={`${this.props.match.url}/new`}>Add A Car</Link>
          <p>Cars: {this.props.cars.length}</p>
          <div>
            {this.props.cars.map( car => { return this.renderCar(car) })}
          </div>
          <Switch>
            <Route exact path={`${this.props.match.path}/new`} component={CarsNew} />
            <Route exact path={`${this.props.match.path}/:id`} component={CarsShow}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return({
    cars: state.cars
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { listCars, deleteCar },
    dispatch)
}

CarsIndex.propTypes = {
  garageList: PropTypes.isOneOf(['ahab-and-sons', 'slimboy']).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
