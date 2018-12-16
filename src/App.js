import React, { Component } from 'react';
import './App.scss';

import DataPage from "./components/data/DataPage";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <DataPage/>
      </div>
    );
  }
}

export default App;