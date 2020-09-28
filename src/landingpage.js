import React from 'react';
import landingpagebackground from './Assets/landingpage.jpg';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <img style={{ width: '95%', height: '95%', justifyContent: 'center', alignItems: 'center' }} src={landingpagebackground} />
        <h1>Voices of the Pandemic</h1>
        <h2>This is a blurb to go below the voices of the pandemic headline.</h2>
      </div>
    );
  }
}

export default LandingPage;