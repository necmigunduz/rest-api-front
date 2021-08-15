import renderer from 'react-test-renderer';
import Card from '../../components/Card';

describe('Card', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Card
        id={2}
        title="CardTitle"
        value="50"
        submitHandler={() => {}}
        changeHandler={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
