import renderer from 'react-test-renderer';
import Info from '../../components/Info';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'www.instance.com/test',
  }),
}));

describe('Info', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Info
      unit="1"
      measurements={[{}]}
      getMeasurementsByDate={() => {}}
      reduceMethod={() => {}}
      selectedDate={{}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
