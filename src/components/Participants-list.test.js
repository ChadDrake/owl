import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantsList from './Participants-list'
import renderer from 'react-test-renderer';

it('renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantsList/>, div)
    ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
    const tree = renderer
    .create(<ParticipantsList id = 'h'
        name ='Jim'
        avatar='img'
        inSession ={false}
        onStage={true} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});