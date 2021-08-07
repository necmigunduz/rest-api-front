import renderer from 'react-test-renderer';
import AddMeasurement from '../../containers/AddMeasurement';

describe('AddMeasurement', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <AddMeasurement
        units={[{}]}
        getUnits={() => {}}
        values={{ unitA: '1', unitB: '2' }}
        addValue={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
