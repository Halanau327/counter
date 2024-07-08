import React, {useEffect, useState} from 'react';
import {Counter} from "./components/Counter";
import "./App.css"
import {Settings} from "./components/Settings";
import {AppRootStateType} from "./components/store";
import {useSelector} from "react-redux";


const AppWithRedux = () => {

    let superCounter = useSelector<AppRootStateType>(state => state)





    const [counterValue, setCounterValue] = useState<number>(0);
    const [max, setMax] = useState<number>(5);
    const [start, setStart] = useState<number>(0)
    const [disableBtn, setDisableBtn] = useState(false)


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

export default AppWithRedux;