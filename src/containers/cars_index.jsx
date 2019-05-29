import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CarsIndex extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    tom: 'hello',
    richard: 'no'
  }

  render() {
    return (
      <div>
        {this.props.tom}
        {this.props.richard}
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
    {},
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
