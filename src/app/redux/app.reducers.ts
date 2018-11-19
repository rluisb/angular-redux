import {CounterActions, INCREMENT} from './app.actions';

const initialState = {
  counter: 0
}

export function  increment(state = initialState, action: CounterActions) {
  console.log('state')
  switch (action.type) {
    case INCREMENT:
      state.counter += action.payload;
      return {
        ...state,
        counter: state.counter
      }
    default:
      return state;
  }
}
