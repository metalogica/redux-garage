import React, { Component } from 'react';
import CarsIndex from '../containers/cars_index.jsx';

const App = (props) => {
  console.log(props.match.params)
  return (
    <div>
      <CarsIndex garageFromParams={props.match.params}/>
    </div>
  )
}

export default App;
