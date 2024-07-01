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
        if(counterValue < max) {
            setCounterValue(v => v+1)
        } else setDisableBtn(true)
    }

    const resetCounterHandler = () => {
        if(start >= 0) {
            setCounterValue(start)
        }
    }

    const setCounterStartHandler = () => {
        setCounterValue(start)
    }



    return (
        <div className="App">
            <Settings onSetMax={setMax}
                      onSetStart={setStart}
                      start={start}
                      max={max}
                      set={setCounterStartHandler}
            />

            <Counter max={max}
                     start={start}
                     counterValue={counterValue}
                     onIncrement={incrementCounterHandler}
                     onReset={resetCounterHandler}
                     disableBtn={disableBtn}

            />
        </div>
    );
};

export default App;