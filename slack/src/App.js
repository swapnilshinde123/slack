import React from 'react'
import Header from "./Header.js";
import Sidebar from "./siderbar";
import "./App.css"
function App() {
    return (
        <div className="app">
            <Header />
            <div className="app_body">
                <Sidebar />

            </div>

        </div>
    )
}

export default App
