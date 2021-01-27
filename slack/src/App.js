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
                            <h1>chat </h1>
                        </Route>
                        <Route path="./">
                            <h1>welcome</h1>
                        </Route>

                    </Switch>

                </div>
            </Router>
        </div>
    )
}

export default App
