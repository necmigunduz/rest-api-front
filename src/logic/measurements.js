const getMeasurementsByDate = (measurements, date) => {
    const { d, m, y } = date;
    const measurementsByDate = measurements.filter((m) => {
      const mDate = new Date(m.created_at);
      return (
        mDate.getDate() === d
        && mDate.getMonth() === m
        && mDate.getFullYear() === y);
    });
    return measurementsByDate;
};
  
const total = (measurements) => {
const total = measurements.reduce((value, measure) => {
    const nValue = measure.value + value;
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
