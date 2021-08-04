import actions from '../actions/index';

const { GET_UNITS } = actions;

const getUnitReducer = (unitState = [], action) => {
  switch (action.type) {
    case GET_UNITS: {
      return action.units;
    }
    default:
      return unitState;
  }
};

export default getUnitReducer;