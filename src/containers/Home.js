import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAllMeasurements } from '../logic/api';
import { loadToken } from '../localStorage/storage';
import MainInfo from '../components/Info';
import newDate, { getMonths } from '../leapYear/leapYear';
import { getMeasurementsByDate } from '../logic/measurements';

const Home = (props) => {
  const {
        measurements, getAllMeasurements, date, changeDate, //eslint-disable-line
  } = props;
  const months = getMonths(0);

  useEffect(() => {
    const token = loadToken();
    fetchAllMeasurements(token).then((measurements) => {
      getAllMeasurements(measurements);
    });
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    changeDate({ day, month, year });
  }, []);

  const handleDateChange = (dir) => {
    const [day, month, year] = newDate(dir, date.day, date.month, date.year);
    changeDate({ day, month, year });
  };

  const mainInfo = [];
  let main = [];
  const nutrients = {};
  let measurementsByDate = [];
  if (measurements[0]) {
    measurementsByDate = getMeasurementsByDate(measurements[0], date);
    measurementsByDate.forEach((e) => {
      if (nutrients[e.title]) {
        nutrients[e.title].total += e.value;
      } else {
        nutrients[e.title] = { ...e };
        nutrients[e.title].total = e.value;
      }
    });
    Object.keys(nutrients).map((nutrient) => mainInfo.push(nutrients[nutrient]));
    main = mainInfo.map((m) => (
      <MainInfo
        key={m.title}
        unit={m.title}
        measurements={mainInfo}
        selectedDate={date}
        total={m.total}
      />
    ));
  }

  return (
    <div>
      <div className="flex space-between date">
        <button className="color-gray" type="button" onClick={() => handleDateChange(-1)}>&lt;</button>
        <p className="color-gray">{`${date.day}-${months[date.month].full}-${date.year}`}</p>
        <button className="color-gray" type="button" onClick={() => handleDateChange(1)}>&gt;</button>
      </div>
      <div className="p-l-20 p-r-20">
        <div className="info-wrapper m-t-30 flex">
          {main}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  measurements: PropTypes.shape({}).isRequired,
  getAllMeasurements: PropTypes.func.isRequired,
  date: PropTypes.shape({
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  changeDate: PropTypes.func.isRequired,
};

export default Home;
