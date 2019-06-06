import { LIST_CARS, CREATE_CAR, DELETE_CAR } from '../actions/actions.js';

export default function(state = [], action) {
  switch (action.type) {
    case LIST_CARS:
      return action.payload;
    case CREATE_CAR:
      return state;
    case DELETE_CAR:
      return state
    default:
      return state;
  }
}
