import React, { Component } from 'react';
import PropTypes from'prop-types';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carImg: props.carImg
    }
  }

  genRandNumber() {
    return parseInt(Math.random() * 3, 10);
  }

  render() {
    console.log(path);
    return(
      <div>
        Gallery rendered
        <img src={`../../assets/images/car${this.genRandNumber}.jpg`}/>
      </div>
    )
  }
}

Gallery.propTypes = {
  carImg: PropTypes.string.isRequired
}

export default Gallery;
