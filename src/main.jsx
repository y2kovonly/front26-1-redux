import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import "./index.css";
import App from "./App";

const defaultState = {
  counter: 10,
  name: '',
  age: 1
};

// редьюсер - reducer
// action - команда, что нужно сделать с состоянием
// action - это объект с обязательным ключом type
// {type: 'INCREASE_COUNTER'}
// {type: 'DECREASE_COUNTER'}
const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      // state = {counter: 11}
      // return {counter: 11}
      return { ...state, counter: state.counter + action.payload };
    case "DECREASE_COUNTER":
      return state;
    default:
      return state;
  }
};

// action creators
export const increaseCounter = () => ({ type: "INCREASE_COUNTER" });
export const decreaseCounter = () => ({ type: "DECREASE_COUNTER" });

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
