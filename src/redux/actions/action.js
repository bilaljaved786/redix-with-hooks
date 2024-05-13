import { increment, decrement } from "../constants/types";

// define actions
const INCREMENT = () => {
  return {
    type: increment,
  };
};

const DECREMENT = () => {
  return {
    type: decrement,
  };
};

export { INCREMENT, DECREMENT };
