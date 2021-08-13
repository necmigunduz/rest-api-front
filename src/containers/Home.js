import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAllMeasurements } from '../logic/api';
import { loadToken } from '../localStorage/storage';
import MainInfo from '../components/Info';
import Nutrient from '../components/Nutrients';
import newDate, { getMonths } from '../leapYear/leapYear';
import { getMeasurementsByDate, total, last } from '../logic/measurements';

const HomePage = (props) => {
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

  const [mainInfo, list] = Object.keys(measurements).reduce(([m, l], key) => {
    const main = ['Weight', 'Energy', 'Energy burned'].includes(key);
    const result = main
      ? [[...m, { title: key, measurements: measurements[key] }], l]
      : [m, [...l, { title: key, measurements: measurements[key] }]];
    return result;
  }, [[], []]);

  const main = mainInfo.map((e) => {
    const reduceMethod = e.title === 'Weight' ? last : total;
    return (
      <MainInfo
        key={e.title}
        unit={e.title}
        measurements={e.measurements}
        selectedDate={date}
        getMeasurementsByDate={getMeasurementsByDate}
        reduceMethod={reduceMethod}
      />
    );
  });

  const nutrient = list.map((e) => (
    <Nutrient
      key={e.title}
      unit={e.title}
      measurements={e.measurements}
      selectedDate={date}
      getMeasurementsByDate={getMeasurementsByDate}
      reduceMethod={total}
    />
  ));

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
        <div className="nutrient-wrapper m-t-30 flex wrap center">
          {nutrient}
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  measurements: PropTypes.shape({}).isRequired,
  getAllMeasurements: PropTypes.func.isRequired,
  date: PropTypes.shape({
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  changeDate: PropTypes.func.isRequired,
};

export default HomePage;
