import changeDateReducer from '../../reducers/changeDateReducer';
import { changeDate } from '../../actions/index';

const state = {
  date: {
    day: 1,
    month: 1,
    year: 1900,
  },
};

describe('changeDateReducer', () => {
  it('changes date', () => {
    const date = {
      day: 2,
      month: 3,
      year: 2021,
    };
    const newState = changeDateReducer(state, changeDate(date));
    expect(newState).toBe(date);
  });
});
