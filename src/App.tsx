import React from 'react';
import {Counter} from "./components/Counter";
import "./App.css"
import {Settings} from "./components/Settings";

const App = () => {
    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
};

export default App;