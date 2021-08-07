import getMeasurementsReducer from '../../reducers/getMeasurementReducer';
import { getAllMeasurements } from '../../actions/index';

const state = {
  measurements: {
    Weight: [{ value: 0 }],
    Energy: [{ value: 0 }],
    'Energy burned': [{ value: 0 }],
    Sugar: [{ value: 0 }],
    Fats: [{ value: 0 }],
    Water: [{ value: 0 }],
    Protein: [{ value: 0 }],
    Carbonhydrates: [{ value: 0 }],
    'Saturated fats': [{ value: 0 }],
  },
};

describe('getMeasurementsReducer', () => {
  it('changes measurements state', () => {
    const measurements = {
      Weight: [{ value: 1 }],
    };
    const newState = getMeasurementsReducer(state, getAllMeasurements(measurements));
    expect(newState.Weight).toStrictEqual([{ value: 1 }]);
  });
});
