import { ADD_DATA, DELETE_DATA, FETCH_DATA } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case DELETE_DATA:
      return state.filter(post => post._id !== action.payload.id);
      case FETCH_DATA:
      return action.posts;
    default:
      return state;
  }
}