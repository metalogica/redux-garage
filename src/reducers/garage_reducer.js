import { SELECT_GARAGE } from '../actions/actions.js';

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_GARAGE:
      return state.find( garage => garage === garageName )
    default:
      return state;
  }
}
