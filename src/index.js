const redux = require("redux");
const createStore = redux.createStore;
//initial state
const initialState = {
  counter: 0
};

//reducer created
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "ADD_COUNT":
      return {
        ...state,
        counter: state.counter + action.value
      };
    default:
      return state;
  }
};
//store createion

const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
  console.log("Subscription done ...", store.getState());
});

//dispatching Actions
store.dispatch({
  type: "INC_COUNT"
});

store.dispatch({
  type: "ADD_COUNT",
  value: 10
});

console.log("after dispatch::", store.getState());
