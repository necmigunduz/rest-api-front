import PropTypes from 'prop-types';
import { icons, measurementUnits } from '../filters/filters';

const MainInfo = (props) => {
  const {
    unit, total,
  } = props;

  return (
    <div className="main-info">
      <p className="big m-b-10 color-dark-gray">{total}</p>
      <i className={`${icons[unit]} x-small color-gray`} />
      <p className="small color-gray">{unit}</p>
      <p className="x-small color-gray">{measurementUnits[unit]}</p>
    </div>
  );
};

MainInfo.propTypes = {
  unit: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default MainInfo;
