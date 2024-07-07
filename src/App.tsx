import React, {useEffect, useState} from 'react';
import {Counter} from "./components/Counter";
import "./App.css"
import {Settings} from "./components/Settings";


const App = () => {
    const [counterValue, setCounterValue] = useState<number>(0);
    const [max, setMax] = useState<number>(5);
    const [start, setStart] = useState<number>(0)
    const [disableBtn, setDisableBtn] = useState(false)

    // useEffect(() => {
    //      let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setCounterValue(newValue)
    //     }
    // }, []);
    //

    useEffect(() => {
        const counterLocalStorageValue = localStorage.getItem('counterValue')
        if (counterLocalStorageValue) {
            let newValue = JSON.parse(counterLocalStorageValue)
            setCounterValue(newValue)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counterValue))
    }, [counterValue]);

    useEffect(() => {
        const maxLocalStorageValue = localStorage.getItem('max')
        const startLocalStorageValue = localStorage.getItem('start')
        if (!maxLocalStorageValue || !startLocalStorageValue) return
        setMax(Number(maxLocalStorageValue))
        setStart(Number(startLocalStorageValue))
    }, []);

    const incrementCounterHandler = () => {
        if(counterValue < max) {
            setCounterValue(counterValue + 1)
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

    const disableCounterBtnHandler = () => {
        setDisableBtn(true)
    }

    const submitSetHandler = () => {
        setCounterValue(start)
        setDisableBtn(false)
        localStorage.setItem("start", JSON.stringify(start))
        localStorage.setItem("max", JSON.stringify(max))
    }

    return (
        <div className="App">
            <Settings onSetMax={setMax}
                      onSetStart={setStart}
                      start={start}
                      max={max}
                      set={setCounterStartHandler}
                      disableBtn={disableBtn}
                      onDisable={disableCounterBtnHandler}
                      onSubmit={submitSetHandler}
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