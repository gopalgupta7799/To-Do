import { ACTIVE, ALL, DONE } from '../actions/type'
export const tabReducer = (state = ALL, action) => {
  switch (action.type) {
    case ALL:
      return ALL;
    case ACTIVE:
      return ACTIVE;
    case DONE:
      return DONE;
    default:
      return state;
  }
}