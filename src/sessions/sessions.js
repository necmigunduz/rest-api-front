import baseURL from '../logic/base';

const login = async (name, password, endpoint) => {
  const credentials = {
    name,
    password,
  };
  const response = fetch(`${baseURL}/${endpoint}`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((e) => e.json());
  return response;
};

const nowLoggedin = () => {
  if (localStorage.token) return true;
  return false;
};

const logout = () => {
  localStorage.clear();
};

export { login, nowLoggedin, logout };
