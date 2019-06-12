import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions/actions.js';
import { Link, Redirect } from 'react-router-dom'

class CarsNew extends Component {
  constructor(props) {
    super(props)
    this.state = { garage: this.props.match.url }
  }

  onSubmit = (values) => {
    const garage = this.findGarage();
    this.props.createCar(values, garage, (car) => {
      // this.props.history.push('/');
      location.reload();
    });
  }

  findGarage() {
    const garageList = this.props.garages;
    const garage = this.props.match.url.split('/')[1];
    return garageList.find( name => name === garage);
  }

  render() {
    this.findGarage()
    return(
      <div className='form-group'>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <label htmlFor="InputBrand">Brand: </label>
          <Field name='brand' type='text' placeholder='Enter brand name' component='input' className='form-control'/>

          <label htmlFor="InputModel">Model: </label>
          <Field name="model" type="text" placeholder="Enter model name" component="input" className="form-control"></Field>

          <label htmlFor="InputOwner">Owner: </label>
          <Field name="owner" type="text" placeholder="Enter owner name" component="input" className="form-control"></Field>

          <label htmlFor="InputPlate">License Plate: </label>
          <Field name="plate" type="text" placeholder="Enter license plate" component="input" className="form-control"></Field>

          <button type='submit'>Add Car To Garage</button>
        </form>
        <Link to='/'>Return to homepage</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return({
    cars: state.cars,
    garages: state.garages
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createCar }, dispatch)
}

export default reduxForm({form: 'newCarForm'})(
  connect(mapStateToProps, mapDispatchToProps)(CarsNew)
);
