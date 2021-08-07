import renderer from 'react-test-renderer';
import Home from '../../containers/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Home
        measurements={{}}
        getAllMeasurements={() => {}}
        date={{
          day: 1,
          month: 1,
          year: 1900,
        }}
        changeDate={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
