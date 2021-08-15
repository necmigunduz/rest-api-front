import PropTypes from 'prop-types';
import { useState } from 'react';

const Card = (props) => {
  const [value, setValue] = useState(0);
  const {
    id, title, submitHandler,
  } = props;

  const handleSubmit = (e, id, value) => {
    submitHandler(e.target.previousSibling.id, id, value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="add-card flex space-between align-center m-b-20 p-l-10 p-r-10">
      <div className="color-gray medium input-title flex">{title}</div>
      <input className="input" id={title} type="number" placeholder="0" value={value} onChange={(e) => handleChange(e)} />
      <button className="submit-button color-dark-gray medium" type="submit" onClick={(e) => handleSubmit(e, id, value)}>+</button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default Card;
