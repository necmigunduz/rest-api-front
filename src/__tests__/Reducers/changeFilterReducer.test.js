import changeFilterReducer from '../../reducers/changeFilterReducer';
import { changeFilter } from '../../actions/index';

const state = {
  filter: 'filterA',
};

describe('changeDateReducer', () => {
  it('changes date', () => {
    const filter = {
      filter: 'filterB',
    };
    const newState = changeFilterReducer(state, changeFilter(filter));
    expect(newState).toBe(filter);
  });
});
