import React from 'react';
import ScrollArrow from './ScrollArrow';
import './landingpage.css';

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1 style={{ paddingTop: '22%', flex: '1' , textAlign: 'center' , fontSize: '2.5vw' }}>Voices of the Pandemic</h1>
          <h2 style={{ paddingBottom: '22%', flex: '1' , textAlign: 'center' , fontSize: '2vw' }}>This is a blurb to go below the voices of the pandemic headline.</h2>
          <ScrollArrow style={{ display: 'flex' }} />
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;