import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Icon = (props) => {
  const {
    path, title, clickIconHandler, icon,
  } = props;

  const location = useLocation();
  const routePath = location.pathname.split('/')[1];

  const nowActive = () => {
    if (`/${routePath}` === path) return 'green';
    return 'red';
  };
  const active = nowActive();
  return (
    <a className={`icon background-${active} color-white`} href={path} onClick={clickIconHandler}>
      <div>
        <div className={`${icon} big`} />
        <div className="small m-top-10">{title}</div>
      </div>
    </a>
  );
};

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickIconHandler: PropTypes.func,
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  clickIconHandler: () => {},
};

export default Icon;
