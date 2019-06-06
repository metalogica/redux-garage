import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { listCars, deleteCar } from '../actions/actions.js';
import Aside from './aside.jsx';

class CarsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentWillMount() {
    this.props.listCars();
  }

  handleClick = (id) => {
    this.props.deleteCar(id, () => {
      this.props.history.push("");
    })
  }

  renderCar({id, brand, model, owner, plate}) {
    return (
      <ul key={id}>
        <li>Brand: {brand}</li>
        <li>Model: {model}</li>
        <li>Owner: {owner}</li>
        <li>Plate: {plate}</li>
        <Link to={`/cars/${id}`} key={id}>Find out more</Link>
        <a onClick={ () => this.handleClick(id) }>Delete Car</a>
      </ul>
    )
  }

  render() {
    if (this.state.hasError) {
      console.log(error)
      return <h1>Something went wrong:</h1>
    }
    return (
      <div>
        <Link to='/cars/new'>Add A Car</Link>
        <p>Cars: {this.props.cars.length}</p>
        <Aside/>
        <div>
          {this.props.cars.map( car => { return this.renderCar(car) })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return({
    cars: state.cars
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { listCars, deleteCar },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
