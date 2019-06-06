import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectGarage } from '../actions/actions.js';

class Aside extends Component {
  static defaultProps = {
    test: 'aside rendered correctly'
  }

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <span>You are currently visting garage: {this.props.garage[0]}.</span>
        <p>Click on the garage that you would like to switch to:</p>
        <ul>
          {this.props.garage.map( garage => { return garage })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    garage: state.garage
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { selectGarage: selectGarage },
  dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
