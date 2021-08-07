import renderer from 'react-test-renderer';
import Progress from '../../containers/Prog';

describe('Progress', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Progress
        measurements={{ Energy: [{ value: 20 }] }}
        getAllMeasurements={() => {}}
        filter="Energy"
        changeFilter={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
