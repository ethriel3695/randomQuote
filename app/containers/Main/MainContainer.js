import React from 'react';
import { Navigation } from 'components';
import { container } from './styles.css';

class MainContainer extends React.Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={true}/>
      </div>
    );
  }
}

export default MainContainer;
