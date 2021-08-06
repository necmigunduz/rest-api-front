import { combineReducers } from 'redux';
import getUnitReducer from './getUnitReducer';
import getMeasurementsReducer from './getMeasurementReducer';
import addValueReducer from './addValueReducer';
import changeDateReducer from './changeDateReducer';
import changeFilterReducer from './changeFilterReducer';

const rootReducer = combineReducers({
  units: getUnitReducer,
  measurements: getMeasurementsReducer,
  values: addValueReducer,
  date: changeDateReducer,
  filter: changeFilterReducer,
});

export default rootReducer;
