import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT } from "./redux/actions/action";
import React from "react";

const Counter = () => {
  // using of use use-selector hooks  (counterReducer) is a reducer with counter state
  const counter = useSelector((state) => state.counterReducer.Counter);

  // useDispatch hook to trigger action and acknoledge redux some action has performed
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter Application using redux (functional component)</h1>
      <br />
      <button onClick={() => dispatch(INCREMENT())}>increment</button> &nbsp;
      <span>current state is {counter}</span>&nbsp;
      <button onClick={() => dispatch(DECREMENT())}>decrement</button>
    </>
  );
};

export default Counter;
