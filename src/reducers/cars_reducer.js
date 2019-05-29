import { LIST_CARS } from '../actions/actions.js';

export default function(state = [], action) {
  switch (action.type) {
    case LIST_CARS:
      return action.payload;
    default:
      return state;
  }
}
