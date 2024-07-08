import React from 'react';
import {Counter} from "./components/Counter";
import "./App.css"
import {Settings} from "./components/Settings";
import {AppRootStateType} from "./components/store";
import {useDispatch, useSelector} from "react-redux";
import {
    disableCounterAC,
    incrementCounterAC,
    resetCounterAC,
    setCounterStartAC,
    setMaxAC, setStartAC
} from "./components/CounterReducer";


const AppWithRedux = () => {

    const  counterValue = useSelector<AppRootStateType, number>(state => state.counterValue)
    const  max = useSelector<AppRootStateType, number>(state => state.max)
    const  start = useSelector<AppRootStateType, number>(state => state.start)
    const  disableBtn = useSelector<AppRootStateType, boolean>(state => state.disableBtn)

    const dispatch = useDispatch();

    const incrementCounterHandler = () => {
        dispatch(incrementCounterAC())
    }

    const resetCounterHandler = () => {
        dispatch(resetCounterAC())
    }

    const setCounterStartHandler = () => {
        dispatch(setCounterStartAC())
    }

    const disableCounterBtnHandler = () => {
        dispatch(disableCounterAC())
    }

    const submitSetHandler = () => {
        dispatch(setCounterStartAC())
       dispatch(disableCounterAC())
    }

    return (
        <div className="App">
            <Settings onSetMax={(value) => dispatch(setMaxAC(value))}
                      onSetStart={(value) => dispatch(setStartAC(value))}
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