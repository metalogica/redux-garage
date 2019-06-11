const BASE_URL = 'https://wagon-garage-api.herokuapp.com/';

// CARS ACTIONS
export const LIST_CARS = 'LIST_CARS';
export function listCars(garage) {
  const endpoint = `${BASE_URL}/${garage}/cars`;
  const carsList = fetch(endpoint).then(response => response.json());
  return {
    type: LIST_CARS,
    payload: carsList
  }
}

export const CREATE_CAR = 'CREATE_CAR';
export function createCar(car, garage, callback) {
  const endpoint = `${BASE_URL}/${garage}/cars`;
  const request = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
    },
    body: JSON.stringify(car)})
    .then( response => response.json())
    .then( () => callback(car))
  return {
    type: CREATE_CAR,
    payload: request
  }
}

export const DELETE_CAR = 'DELETE_CAR';
export function deleteCar(carId, callback) {
  const endpoint = `https://wagon-garage-api.herokuapp.com/cars/${carId}`;
  fetch(endpoint, { method: 'DELETE'})
    .then( response => response.json() )
    .then( () => callback() )
  return {
    type: DELETE_CAR,
    payload: carId
  }
}
