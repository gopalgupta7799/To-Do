import axios from 'axios';
import { ADD, DELETE, GET_ALL, TOGGLE, UPDATE } from "./type";

const BACKEND_HOST = "http://192.168.1.35:4000";

export const addNewToDo = (newToDo) => async (dispatch) => {
  try {
    const response = await axios.post(BACKEND_HOST + '/todo/add', { "content": newToDo });
    dispatch({ type: ADD, payload: response.data })
  } catch (error) {
    console.log(error.message);
  }
}

export const getAllToDos = () => async (dispatch) => {
  try {
    const response = await axios.get(BACKEND_HOST + '/todo/');
    dispatch({ type: GET_ALL, payload: response.data })
  } catch (error) {
    console.log(error.message);
  }
}

export const toggleToDo = (id) => async (dispatch) => {
  try {
    const response = await axios.get(BACKEND_HOST + `/todo/toggle/${id}`);
    dispatch({ type: TOGGLE, payload: response.data })
  } catch (error) {
    console.log(error.message);
  }
}

export const update = (id, newContent) => async (dispatch) => {
  try {
    const response = await axios.post(BACKEND_HOST + `/todo/update/${id}`, { "content": newContent });
    dispatch({ type: UPDATE, payload: response.data })
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteToDo = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(BACKEND_HOST + `/todo/delete/${id}`);
    dispatch({ type: DELETE, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
}



export const changeTab = (tabName) => async (dispatch) => {
  dispatch({ type: tabName });
}