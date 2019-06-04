import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { listCars } from '../actions/actions.js';

class CarsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.cars.length === 0) {
      this.props.listCars();
    }
  }

  renderCar({id, brand, model, owner, plate}) {
    return (
      <ul key={id}>
        <li>Brand: {brand}</li>
        <li>Model: {model}</li>
        <li>Owner: {owner}</li>
        <li>Plate: {plate}</li>
        <Link to={`/cars/${id}`} key={id}>Find out more</Link>
      </ul>
    )
  }

  render() {
    return (
      <div>
        <div>
          {this.props.cars.map( car => { return this.renderCar(car) })}
        </div>
        <Link to='/cars/new'>Add A Car</Link>
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
