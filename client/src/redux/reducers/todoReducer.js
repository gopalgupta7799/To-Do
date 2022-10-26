import { ADD, DELETE, GET_ALL, TOGGLE, UPDATE } from "../actions/type";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [action.payload, ...state];
    case GET_ALL:
      return action.payload;
    case TOGGLE:
      return state.map(todo =>
        todo._id === action.payload._id ?
          { ...todo, done: !todo.done }
          :
          todo
      )
    case UPDATE:
      return state.map(todo =>
        todo._id === action.payload._id ?
          { ...todo, content: action.payload.content }
          :
          todo
      )
    case DELETE:
      return state.filter((todo) =>
        todo._id !== action.payload._id
      )
    default:
      return state;
  }
}