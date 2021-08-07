import actions, {
  getUnits, getAllMeasurements, addValue, changeDate, changeFilter,
} from '../../actions/index';

const {
  GET_UNITS, GET_MEASUREMENTS, ADD_VALUE, CHANGE_DATE, CHANGE_FILTER,
} = actions;

describe('getUnits', () => {
  it('includes the default units for creating measurements', () => {
    const units = ['unitA', ' unitB'];
    const expectedResult = {
      type: GET_UNITS,
      units,
    };
    expect(getUnits(units)).toStrictEqual(expectedResult);
  });
});

describe('getAllMeasurements', () => {
  it('includes the measurements created by users', () => {
    const measurements = {
      unitA: ['mA', 'mB'],
      unitB: ['mA', 'mB'],
    };
    const expectedResult = {
      type: GET_MEASUREMENTS,
      measurements,
    };
    expect(getAllMeasurements(measurements)).toStrictEqual(expectedResult);
  });
});

describe('addValue', () => {
  it('includes the values entered by users', () => {
    const unit = 'unitA';
    const value = 69;
    const expectedResult = {
      type: ADD_VALUE,
      unit,
      value,
    };
    expect(addValue(unit, value)).toStrictEqual(expectedResult);
  });
});

describe('changeDate', () => {
  it('includes date object', () => {
    const day = 1;
    const month = 1;
    const year = 1900;
    const expectedResult = {
      type: CHANGE_DATE,
      date: { day, month, year },
    };
    expect(changeDate({ day, month, year })).toStrictEqual(expectedResult);
  });
});

describe('changeFilter', () => {
  it('includes filters as strings', () => {
    const filter = 'filterA';
    const expectedResult = {
      type: CHANGE_FILTER,
      filter,
    };
    expect(changeFilter(filter)).toStrictEqual(expectedResult);
  });
});
