const BASE_URL = 'https://wagon-garage-api.herokuapp.com/ahab-and-sons/';

export const LIST_CARS = 'LIST_CARS';
export function listCars() {
  const endpoint = `${BASE_URL}/cars`;
  const carsList = fetch(endpoint).then(response => response.json());
  return {
    type: LIST_CARS,
    payload: carsList
  }
}

export const CREATE_CAR = 'CREATE_CAR';
export function createCar(car, callback) {
  const endpoint = `${BASE_URL}/cars`;
  const request = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify(car)})
    .then( response => response.json())
    .then( () => callback())
  return {
    type: CREATE_CAR,
    payload: request
  }
}
