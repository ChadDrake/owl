import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Stage renders UI as expected', () => {
  const tree = renderer
    .create(
      <Stage id="h" name="Jim" avatar="img" inSession={false} onStage={true} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
