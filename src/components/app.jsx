import React, { Component } from 'react';
import CarsIndex from '../containers/cars_index.jsx';

const App = (props) => {
  return (
    <div>
      <CarsIndex garageFromParams={props.match.params}/>
    </div>
  )
}

export default App;
