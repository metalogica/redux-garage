import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createHistory as history } from 'history';
import { createCar } from '../actions/actions.js';

class CarsNew extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit = (values) => {
    event.preventDefault();
    this.props.createCar(values, () => {
      console.log(values);
      debugger
      this.props.history.push('/');
    });
  }

  render() {
    return(
      <div className='form-group'>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="InputBrand">Brand: </label>
          <Field name='brand' type='text' placeholder='Enter brand name' component='input' className='form-control'/>

          <label htmlFor="InputModel">Model: </label>
          <Field name="modl" type="text" placeholder="Enter model name" component="input" className="form-control"></Field>

          <label htmlFor="InputOwner">Owner: </label>
          <Field name="owner" type="text" placeholder="Enter owner name" component="input" className="form-control"></Field>

          <label htmlFor="InputPlate">License Plate: </label>
          <Field name="plate" type="text" placeholder="Enter license plate" component="input" className="form-control"></Field>

          <button type='submit'>Add Car To Garage</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return({})
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createCar }, dispatch)
}

export default reduxForm({form: 'newCarForm'})(
  connect(mapStateToProps, { createCar })(CarsNew)
);
