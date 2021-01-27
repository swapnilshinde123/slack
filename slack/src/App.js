import React from 'react'
import Header from "./Header.js";
import Sidebar from "./siderbar";
import Chat from "./Chat";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Router >
                <Header />
                <div className="app_body">
                    <Sidebar />

                    <Switch>
                        <Route path="/room/:roomId">
                            <Chat/>
                            
                        </Route>
                        <Route path="./">
                           
                        </Route>

                    </Switch>

                </div>
            </Router>
        </div>
    )
}

export default App
