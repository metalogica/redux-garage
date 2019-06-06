import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import Aside from './aside.jsx';

class CarsShow extends Component {
  constructor(props) {
    super(props);
  }

  renderCar({id, brand, model, owner, plate}) {
    return (
      <div>
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <p>Owner: {owner}</p>
        <p>Plate: {plate}</p>
        <Link to='/'>Back to homepage.</Link>
      </div>
    )
  }

  render() {
    return(this.renderCar(this.props.car));
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10)
  return({
    car: state.cars.find( car => car.id === id)
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
