import renderer from 'react-test-renderer';
import Nutrient from '../../components/Nutrients';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'www.instance.com/test',
  }),
}));

describe('Nutrient', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Nutrient
      unit="1"
      measurements={[{}]}
      getMeasurementsByDate={() => {}}
      reduceMethod={() => {}}
      selectedDate={{}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
