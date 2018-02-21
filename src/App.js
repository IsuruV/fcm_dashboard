import React, { Component } from 'react';
import './App.css';
import FcmCard from './components/FcmCard';
import FcmNavigation from './components/FcmNavigation';
import FcmGrid from './components/FcmGrid';
import FcmFilter from './components/FcmFilter';

class App extends Component {
  render() {
    return (
      <FcmNavigation>
        <FcmFilter/>
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
