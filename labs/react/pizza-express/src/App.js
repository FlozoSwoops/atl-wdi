import React, { Component } from 'react';
import Splash from './Components/Splash.jsx'
import MenuItems from './Components/MenuItems.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
        <MenuItems />
        </div>
        );
  }
}

export default App;
