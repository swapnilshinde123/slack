import React ,{useState} from 'react'
import Header from "./Header.js";
import Sidebar from "./siderbar";
import Chat from "./Chat";
import "./App.css";
import Login from"./Login"
import {useStateValue } from "./stateprovider";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [{ user }, dispatch] = useStateValue();
    return (
      <div>
        {!user ? (
          <Login />
          
        ) : (
          <>
            <Router>
              <Header />
              <div className="app_body">
                <Sidebar />
                <Switch>
                  <Route path="/:roomId">
                    <Chat />
                  </Route>
                </Switch>
              </div>
            </Router>
          </>
        )}
      </div>
    );
  }
export default App
