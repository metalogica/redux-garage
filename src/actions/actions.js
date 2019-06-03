export const LIST_CARS = 'LIST_CARS';
export function listCars() {
  const carsList = fetch('https://wagon-garage-api.herokuapp.com/ahab-and-sons/cars').then(response => response.json());
  return {
    type: LIST_CARS,
    payload: carsList
  }
}

export const SHOW_CAR = 'SHOW_CAR';
export function showCar(car_id) {
  const carsList = fetch('https://wagon-garage-api.herokuapp.com/ahab-and-sons/cars').then(response => response.json());
  return {
    type: SHOW_CAR,
    payload: carsList
  }
}
