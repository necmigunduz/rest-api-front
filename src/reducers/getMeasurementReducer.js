import actions from '../actions/index';

const { GET_MEASUREMENTS } = actions;

const getMeasurementsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MEASUREMENTS: {
      return { ...state, ...action.measurements };
    }
    default:
      return state;
  }
};

export default getMeasurementsReducer;
