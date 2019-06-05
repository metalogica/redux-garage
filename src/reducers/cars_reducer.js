import { LIST_CARS, CREATE_CAR } from '../actions/actions.js';

export default function(state = [], action) {
  switch (action.type) {
    case LIST_CARS:
      return action.payload;
    default:
      return state;
  }
}
