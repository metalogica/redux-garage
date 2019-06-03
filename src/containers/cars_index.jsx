import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listCars } from '../actions/actions.js';

class CarsIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.listCars()
  }

  renderCar({id, brand, model, john, plate}) {
    return (
      <ul key={id}>
        <li>Brand: {brand}</li>
        <li>Model: {model}</li>
        <li>Owner: {john}</li>
        <li>Plate: {plate}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.props.cars.map( car => { return this.renderCar(car) })}
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
    { listCars },
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
