import React, { Component } from 'react';
import PropTypes from'prop-types';


class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carImg: props.carImg
    }
  }


  render() {
    console.log(path);
    return(
      <div>
        Gallery rendered
        <img src={`../../assets/images/car1.jpg`}/>
      </div>
    )
  }
}

Gallery.propTypes = {
  carImg: PropTypes.string.isRequired
}

export default Gallery;
