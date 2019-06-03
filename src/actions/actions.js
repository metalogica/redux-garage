export const LIST_CARS = 'LIST_CARS';
export function listCars() {
  const carsList = fetch('https://wagon-garage-api.herokuapp.com/ahab-and-sons/cars').then(response => response.json());
  return {
    type: LIST_CARS,
    payload: carsList
  }
}
