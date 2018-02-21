import React, { Component } from 'react';
import './App.css';
import FcmCard from './components/FcmCard';
import FcmNavigation from './components/FcmNavigation';
import FcmGrid from './components/FcmGrid';

class App extends Component {
  render() {
    return (
      <FcmNavigation>
        <FcmGrid>
          <FcmCard/>
          <FcmCard/>
          <FcmCard/>
          <FcmCard/>
          <FcmCard/>
          <FcmCard/>
          <FcmCard/>
          <FcmCard/>
          <FcmCard/>
        </FcmGrid>
      </FcmNavigation>
    );
  }
}

export default App;
