import actions from '../actions/index';

const { ADD_VALUE } = actions;

const addValueReducer = (valueState = {}, action) => {
  switch (action.type) {
    case ADD_VALUE: {
      return { ...valueState, unit: action.value };
    }
    default:
      return valueState;
  }
};

export default addValueReducer;
