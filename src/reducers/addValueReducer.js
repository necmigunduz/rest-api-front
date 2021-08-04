import actions from '../actions/index';

const { ADD_VALUE } = actions;

const addValueReducer = (valueState = {}, action) => {
  switch (action.type) {
    case ADD_VALUE: {
      const newState = { ...valueState };
      const { unit } = action;
      newState[unit] = action.value;
      return newState;
    }
    default:
      return valueState;
  }
};

export default addValueReducer;