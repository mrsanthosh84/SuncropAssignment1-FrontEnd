import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockAxios from "axios";
import {fetchTodos, addTodo,updateTodo, deleteTodo} from "./actionCreator";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();
jest.mock('axios');

describe("Todos actions", () => {
  
  it("dispatches FETCH_TODOS action and returns data on success", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
         data: {
           result: [{ item: "item1" }, { item: "item2" }]
         }
      })
    );
  
    await store.dispatch(fetchTodos());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("FETCH_TODOS");
  });

  it("dispatche ADD_TODO action and returns data on success", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
         data: {
           result: [{ item: "item1" }]
         }
      })
    );
  
    await store.dispatch(addTodo());
    const actions = store.getActions();
    expect(actions[1].type).toEqual("ADD_TODO");
  });

  it("dispatche UPDATE_TODO action and returns data on success", async () => {
    mockAxios.put.mockImplementationOnce(() =>
      Promise.resolve({
         data: {
           result: [{ item: "item1" }]
         }
      })
    );
  
    await store.dispatch(updateTodo());
    const actions = store.getActions();
    expect(actions[2].type).toEqual("UPDATE_TODO");
  });

  it("dispatche DELETE_TODO action and returns data on success", async () => {
    mockAxios.delete.mockImplementationOnce(() =>
      Promise.resolve({
         data: {}
      })
    );
  
    await store.dispatch(deleteTodo());
    const actions = store.getActions();
    expect(actions[3].type).toEqual("DELETE_TODO");
  });

});



