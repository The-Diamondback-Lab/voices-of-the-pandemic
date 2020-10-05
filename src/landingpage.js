import React from 'react';
import landingpagebackground from './Assets/landingpage.jpg';
import ScrollArrow from './ScrollArrow';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <img style={{ width: '100%', height: '100%' }} src={landingpagebackground} />
        <h1 style={{ position: 'absolute' , textAlign: 'center' , color: 'black' , left: '40%' , top: 300 }}>Voices of the Pandemic</h1>
        <h2 style={{ position: 'absolute', textAlign: 'center', color: 'black', left: '27%', top: 350 }}>This is a blurb to go below the voices of the pandemic headline.</h2>
        <h2 style={{ position: 'absolute', textAlign: 'center', color: 'black', left: '27%', top: 5000 }}>This is content for the page.</h2>
        <ScrollArrow />
      </div>
    );
  }
}

export default LandingPage;