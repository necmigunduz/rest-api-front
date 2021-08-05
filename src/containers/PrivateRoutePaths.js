import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { nowLoggedin } from '../sessions/sessions';
import Home from './Home';
import AddValue from './AddValue';
import Prog from './Prog';
import {
  getUnits, getAllMeasurements, addValue, changeDate, changeFilter,
} from '../actions/index';

const PrivateRoutePaths = (props) => {
  const {
    units, getUnits, values, addValue, measurements,
    getAllMeasurements, date, changeDate, filter, changeFilter,
  } = props;
  const authorized = nowLoggedin();
  let routes;
  if (authorized) {
    routes = (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              measurements={measurements}
              getAllMeasurements={getAllMeasurements}
              date={date}
              changeDate={changeDate}
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={() => (
            <AddValue
              units={units}
              values={values}
              getUnits={getUnits}
              addValue={addValue}
            />
          )}
        />
        <Route
          exact
          path="/progress"
          render={() => (
            <Prog
              measurements={measurements}
              getAllMeasurements={getAllMeasurements}
              filter={filter}
              changeFilter={changeFilter}
            />
          )}
        />
      </>
    );
  } else {
    routes = <Redirect to={{ pathname: '/users/login' }} />;
  }

  return (
    routes
  );
};

PrivateRoutePaths.propTypes = {
  units: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.shape({}).isRequired,
  measurements: PropTypes.shape({}).isRequired,
  date: PropTypes.shape({}).isRequired,
  getUnits: PropTypes.func.isRequired,
  getAllMeasurements: PropTypes.func.isRequired,
  addValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  units: state.units,
  measurements: state.measurements,
  values: state.values,
  date: state.date,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  getUnits: (units) => dispatch(getUnits(units)),
  getAllMeasurements: (measurements) => dispatch(getAllMeasurements(measurements)),
  addValue: (unit, value) => dispatch(addValue(unit, value)),
  changeDate: (date) => dispatch(changeDate(date)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutePaths);
