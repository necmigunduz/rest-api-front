import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchUnits, saveMeasurements } from '../logic/api';
import { loadToken } from '../localStorage/storage';
import Card from '../components/Card';

const AddMeasurement = (props) => {
  const {
    units, getUnits, values, addValue,
  } = props;
  useEffect(() => {
    const token = loadToken();
    fetchUnits(token).then((units) => {
      getUnits(units);
    });
  }, []);

  const handleSubmit = (unit, id, value) => {
    const token = loadToken();
    saveMeasurements(id, value, token);
    addValue(unit, '');
  };

  const handleMeasurementChange = (unit, value) => {
    addValue(unit, value);
  };

  const unitList = units.map((unit) => (
    <Card
      key={unit.id}
      id={unit.id}
      title={unit.title}
      value={values[unit.title]}
      changeHandler={handleMeasurementChange}
      submitHandler={handleSubmit}
    />
  ));

  return (
    <div className="add-wrapper p-l-20 p-r-20">{unitList}</div>
  );
};

AddMeasurement.propTypes = {
  units: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUnits: PropTypes.func.isRequired,
  values: PropTypes.shape({}).isRequired,
  addValue: PropTypes.func.isRequired,
};

export default AddMeasurement;
