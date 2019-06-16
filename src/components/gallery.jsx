import React, { Component } from 'react';
import PropTypes from'prop-types';
import car0 from '../images/car0.jpg';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
console.log(car0);

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

  chooseImg() {
    let cars = [car0, car1, car2];
    let rand = parseInt(Math.random() * (cars.length - 1), 10);
    let car = cars[rand]
    return `/${car}`;
  }

  render() {
    console.log(this.chooseImg())
    return(
      <div>
        Gallery rendered
        <img src={`${this.chooseImg()}`}/>
      </div>
    )
  }
}

Gallery.propTypes = {
  carImg: PropTypes.string
}

export default Gallery;
