import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components & containers
import Gallery from '../components/gallery.jsx';

class CarsShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    }
  }

  onChange = () => {

  }

  renderCar({id, brand, model, owner, plate}) {
    return (
      <div>
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <p>Owner: {owner}</p>
        <p>Plate: {plate}</p>
        <label>
          <input type="checkbox" chcked={this.state.isChecked} onChange={this.onChange}/>
          {this.state.isChecked ? this.props.labelOn : this.props.labelOff }
        </label>
        <Link to='/'>Back to homepage.</Link>
        <Gallery carImg={`../../assets/images/car1.jpg`} />
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
    car: state.cars.find( car => car.id === id),
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { }, dispatch)
}

CarsShow.propTypes = {
  id: PropTypes.number,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  plate: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
