import React, { Component } from "react";
import { Lucas } from "./components/lucas/lucas";
import { MeetTasker } from "./components/MeetTasker/MeetTasker";
import { ThingsToKnow } from './components/ThingsToKnow/ThingsToKnow';
import { Articles } from './components/Articles/Articles';
import { TopCategories } from './components/TopCategories/TopCategories'
import { Footer } from './components/Footer/Footer'

import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
      <Lucas />
        <MeetTasker />
        <ThingsToKnow />
        <Articles />
        <TopCategories />
        <Footer />
      </div>
    );
  }
}

export default App;
