import { DETAILS } from "../types/DestinationTypes";
const DestinationsReducer = (state, action) => {
  const { type, payload } = action;
  console.log(typeof payload);
  if (type === DETAILS) {
    /*
    for each item in the array
    */
    const destination = state.destinations.find(
      (destination) => destination.id === parseInt(payload)
    );
    return {
      ...state,
      details: destination,
    };
  } else {
    return state;
  }
};

export default DestinationsReducer;
