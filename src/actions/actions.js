export const LIST_CARS = 'LIST_CARS';
export function listCars() {
  return {
    type: LIST_CARS,
    payload: ['Test']
  }
}
