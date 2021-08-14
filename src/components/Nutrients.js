import PropTypes from 'prop-types';
import { measurementUnits } from '../filters/filters';

const Nutrients = (props) => {
  const {
    unit, measurements, getMeasurementsByDate, selectedDate,
  } = props;

  const measurementsByDate = getMeasurementsByDate(measurements, selectedDate);

  return (
    <div className="flex nutrient center p-l-20 p-r-20 m-b-50">
      <div className={`${unit}`} n-icon x-big color-blue text-center />
      <div className="n-details m-l-20">
        <div className="color-gray overflow-hidden">{unit}</div>
        <div className="color-gray m-big">
          {measurementsByDate.map((measure) => (
            <ul style={{ display: 'flex', flexDirection: 'row' }} key={measure.title}>
              <li>{measure.title}</li>
              <li className="x-small">{measure.value}</li>
            </ul>
          ))}
          <span className="x-small">{`{${measurementUnits[unit]}}`}</span>
        </div>
      </div>
    </div>
  );
};

Nutrients.propTypes = {
  unit: PropTypes.string.isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeasurementsByDate: PropTypes.func.isRequired,
  selectedDate: PropTypes.shape({}).isRequired,
};

export default Nutrients;
