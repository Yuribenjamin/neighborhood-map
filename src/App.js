import React, { Component } from 'react';
import './App.css';
import Mymap from './Mymap'
import Searchbar from './Searchbar'

class App extends Component {

  render() {
    return (
      <main>
        <Searchbar/>
        <Mymap/>
      </main>
    );
  }
}





export default App;
