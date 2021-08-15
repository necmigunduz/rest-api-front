import baseURL from './base';

const fetchUnits = async (token) => {
  const response = await fetch(`${baseURL}/units`, {
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((e) => e.json());
  return response.units;
};

const saveMeasurements = async (id, value, token) => {
  fetch(`${baseURL}/units/${id}/measurements`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
};

const fetchAllMeasurements = async (token) => {
  const response = await fetch(`${baseURL}/measurements`, {
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((e) => e.json());
  return response.data;
};

export { fetchUnits, saveMeasurements, fetchAllMeasurements };
