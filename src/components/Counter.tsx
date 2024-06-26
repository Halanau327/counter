import React, {useState} from 'react';
import {CounterField} from "./counterComponents/CounterField";
import {Button} from "./counterComponents/Button";


type CounterPropsType = {
    max: number
    start: number
    counterValue: number
    onIncrement: () => void
    onReset: () => void
    disableBtn: boolean
}

export const Counter = ({max, start, counterValue, onIncrement, onReset, disableBtn }: CounterPropsType) => {

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
            <CounterField  value={counterValue}/>
            <div className="buttonContainer">
                <Button title="inc" onClick={onIncrement} styles="myButton" disabled={counterValue >= max ? true : disableBtn} />
                <Button title="reset" onClick={onReset} styles="myButton" disabled={counterValue === start ? true : disableBtn} />
            </div>
        </div>
    );
};