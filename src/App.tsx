import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import "./App.css"
import {Settings} from "./components/Settings";



const App = () => {
    const [counterValue, setCounterValue] = useState<number>(0);
    const [max, setMax] = useState<number>(5);
    const [start, setStart] = useState<number>(0)
    const [disableBtn, setDisableBtn] = useState(false)


    const incrementCounterHandler = () => {
        setCounterValue(v => v++)
    }

    return (
        <div className="App">
            <Settings/>
            <Counter max={max}
                     start={start}
                     counterValue={counterValue}
                     onIncrement={incrementCounterHandler}



            />
        </div>
    );
};

export default App;