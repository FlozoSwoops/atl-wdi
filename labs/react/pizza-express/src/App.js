import React, { Component } from 'react';
import Splash from './Components/Splash.jsx'
import MenuItems from './Components/MenuItems.jsx'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Splash />
        <MenuItems />
        </div>
        );
  }
}

export default App;
