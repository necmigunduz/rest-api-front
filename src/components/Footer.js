import { logout } from '../sessions/sessions';
import Icon from './Icon';

const Footer = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <footer className="flex fixed footer">
      <Icon icon="fas fa-plus" path="/add" title="Add Measurement" />
      <Icon icon="fas fa-home" path="/" title="Home" />
      <Icon icon="fas fa-tasks" path="/progress" title="Progress" />
      <Icon icon="fas fa-sign-out-alt" path="/users/login" title="Logout" clickIconHandler={handleLogout} />
    </footer>
  );
};

export default Footer;
