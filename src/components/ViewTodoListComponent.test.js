import React from 'react';
import { shallow, configure } from 'enzyme'
import ViewTodoListComponent from "./ViewTodoListComponent";
import { Provider } from "react-redux";
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

describe('Given the ViewTodoListComponent is rendered', () => {
   
  let wrapper;
  let mockSubmit;
  beforeEach(() => {
    mockSubmit = jest.fn();
    wrapper = shallow(<Provider store={store}>
        <ViewTodoListComponent />
    </Provider>);
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

});