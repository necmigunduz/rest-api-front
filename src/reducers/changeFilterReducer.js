import actions from '../actions/index';

const { CHANGE_FILTER } = actions;

const changeFilterReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default changeFilterReducer;