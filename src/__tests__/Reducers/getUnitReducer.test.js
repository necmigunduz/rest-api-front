import getUnitReducer from '../../reducers/getUnitReducer';
import { getUnits } from '../../actions/index';

const state = {
  units: [],
};

describe('getUnitReducer', () => {
  it('changes units state', () => {
    const units = ['unitA', 'unitB'];
    const newState = getUnitReducer(state, getUnits(units));
    expect(newState).toStrictEqual(units);
  });
});
