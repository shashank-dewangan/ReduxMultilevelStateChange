import { createStore, combineReducers } from "redux";
const employee = {
  name: "NA",
  dept: "NA"
};
const customer = {
  name: "NA",
  age: 0,
  fullname: { first: "NA", last: "NA" }
};
const custreducer = (state = customer, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return { ...state, name: action.payload };
    case "ADD_AGE":
      return { ...state, age: action.payload };
    case "INCREASE_AGE":
      return { ...state, age: state.age + action.payload };
    case "CHANGE_FIRSTNAME":
      return {
        ...state,
        fullname: { ...state.fullname, first: action.payload }
      };
    default:
      return state;
  }
};
const empreducer = (state = employee, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
const combReducer = combineReducers({ cust: custreducer, emp: empreducer });
const store = createStore(combReducer);
store.subscribe(() => console.log("state", store.getState()));
console.log("initial state", store.getState());
store.dispatch({ type: "ADD_NAME", payload: "TEST" });
store.dispatch({ type: "ADD_AGE", payload: 20 });
store.dispatch({ type: "INCREASE_AGE", payload: 20 });
store.dispatch({ type: "CHANGE_NAME", payload: "EMPTEST" });
store.dispatch({ type: "CHANGE_FIRSTNAME", payload: "CUSTTEST" });
console.log("initial state of customer", store.getState().cust);
console.log("initial state of employee", store.getState().emp);
