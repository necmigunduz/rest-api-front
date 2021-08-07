import AddValueReducer from '../../reducers/addValueReducer';
import { addValue } from '../../actions/index';

const state = {
  values: {},
};

describe('AddValueReducer', () => {
  it('changes values', () => {
    const unit = 'unitA';
    const value = 30;
    const newState = AddValueReducer(state, addValue(unit, value));
    expect(newState.unitA).toBe(30);
  });
});
