import React, { Component } from 'react';
import Location from './components/Location';
import SplashImage from './components/SplashImage';
import Navbar from './components/Navbar';
import Description from './components/Description';
import MenuList from './components/MenuList';
import LocationList from './components/LocationList';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <MenuList />
        <LocationList />
        <Contact />
      </div>
    );
  }
}

export default App;
