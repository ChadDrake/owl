import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from './Chat-Log';
import renderer from 'react-test-renderer';

let store = [
  {
    id: 1,
    name: 'Koren Templeton',
    avatar:
      'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: true,
  },
  {
    id: 2,
    name: 'Caty Flucker',
    avatar:
      'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: false,
  },
];
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatLog list={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
  const tree = renderer
    .create(
      <ChatLog
        id="h"
        type="thumbs up"
        list={store}
        message="heya"
        participantId={1}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
