import axios from "axios";
import {
  FETCH_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TAB,
  
} from "./actionsTypes";
const TODOLIST_API_BASE_URL = "http://localhost:8080/api/todoList";

export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get(TODOLIST_API_BASE_URL);

  dispatch({ type: FETCH_TODOS, payload: res.data.result });
};

export const addTodo = (name) => async (dispatch) => {
  const res = await axios.post(TODOLIST_API_BASE_URL, { itemName: name });

  dispatch({ type: ADD_TODO, payload: res.data.result });
};

export const updateTodo = (id, name) => async (dispatch) => {
  const res = await axios.put(TODOLIST_API_BASE_URL + "/" + id, name);

  dispatch({ type: UPDATE_TODO, payload: { ...res.data.result, name } });
};

export const deleteTodo = (id) => async (dispatch) => {
  const res = await axios.delete(TODOLIST_API_BASE_URL + "/" + id);

  dispatch({ type: DELETE_TODO, payload: res.data.result });
};

export const editTodo = (todo) => async (dispatch) => {
  const res = axios.put(TODOLIST_API_BASE_URL + '/' + todo.id, todo);
  dispatch({ type: EDIT_TODO, payload: res.data });
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, filter: tab });
};
