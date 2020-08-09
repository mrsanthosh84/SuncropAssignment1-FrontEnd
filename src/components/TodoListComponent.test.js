import React from 'react';
import { shallow, configure } from 'enzyme'
import TodoListComponent from "./TodoListComponent";
import { Provider } from "react-redux";
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

describe('Given the TodoListComponent is rendered', () => {
   
  let wrapper;
  let mockSubmit;
  beforeEach(() => {
    mockSubmit = jest.fn();
    wrapper = shallow(<Provider store={store}>
        <TodoListComponent />
    </Provider>);
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

});