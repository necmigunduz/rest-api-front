const getMeasurementsByDate = (measurements, date) => {
  const { day, month, year } = date;
  const measurementsByDate = measurements.filter((m) => {
    const mDate = new Date(m.created_at);
    return (
      mDate.getDate() === day
        && mDate.getMonth() === month
        && mDate.getFullYear() === year);
  });
  return measurementsByDate;
};

const total = (measurements) => {
  const total = measurements.reduce((value, measure) => {
    const nValue = parseInt(measure.value, 10) + parseInt(value, 10);
    return nValue;
  }, 0);
  return total;
};

const last = (measurements) => {
  const last = measurements.reduce((last, measure) => {
    if (measure.created_at > last.created_at) return measure;
    return last;
  }, { created_at: '' });
  if (!last.value) return 0;
  return last.value;
};

export { getMeasurementsByDate, total, last };
