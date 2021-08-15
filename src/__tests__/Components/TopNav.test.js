import renderer from 'react-test-renderer';
import TopNav from '../../components/TopNav';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'www.instance.com/test',
  }),
}));

describe('TopNav', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TopNav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
