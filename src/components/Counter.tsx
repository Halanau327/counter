import React, {useState} from 'react';
import {CounterField} from "./counterComponents/CounterValue";
import {Button} from "./counterComponents/Button";


type CounterPropsType = {
    max: number
    start: number
    counterValue: number
    onIncrement: () => void
}

export const Counter = ({max, start, counterValue, onIncrement}: CounterPropsType) => {

    // // const maxValue = 5
    // // const minValue = 0;
    //
    // const isIncreaseOn = count === maxValue
    // const isResetOn = count === minValue
    //
    // const onIncrementClick = () => {
    //     if (count < maxValue) {
    //         setCount(count + 1);
    //     }
    // };
    //
    // const onResetClick = () => {
    //     setCount(minValue);
    // };

    return (
        <div className="container rightContainer">
            <CounterField styles={isIncreaseOn ? "red" : "common"} value={counterValue}/>
            <div className="buttonContainer">
                <Button title="inc" onClick={onIncrementClick} styles="myButton" disabled={isIncreaseOn}/>
                <Button title="reset" onClick={onResetClick} styles="myButton" disabled={isResetOn}/>
            </div>
        </div>
    );
};