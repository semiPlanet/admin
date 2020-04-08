import React, { Component } from 'react';
import Header from './Modules/shared/Header';
import SideBar from './Modules/shared/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Modules/main/router';


class App extends Component {
  render() {
    return(
      <div class="wrapper">
        <BrowserRouter>
          <Header />
          <SideBar />
          <Routing />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
