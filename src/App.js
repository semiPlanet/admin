import React, { useState } from 'react';
import Header from './Modules/shared/Header';
import SideBar from './Modules/shared/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Modules/main/router';
import { useAuth, AuthContext } from './Modules/auth/auth';

function App () {
    const existingToken = localStorage.getItem('authorization');
    const existingUser  = JSON.parse(localStorage.getItem('user'));
    const [authTokens, setAuthTokens] = useState(existingToken);
    const [user, setUser] = useState(existingUser);

    const setTokens = (result) => {
      console.log(result)
      if(result !=null && result.headers.authorization != null && result.data.user != null){
        localStorage.setItem('authorization', result.headers.authorization);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        setAuthTokens(result.headers.authorization);
        setUser(result.data.user);
      }
    }

    return(      
      <div className="wrapper">
        <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
          <Router>
              {
                authTokens
                ?
                <div>
                  <Header />
                  <SideBar />
                  <Routing />
                </div>
                :
                <Routing />         
              }
          </Router>
        </AuthContext.Provider>
      </div>
    );
}

export default App;
