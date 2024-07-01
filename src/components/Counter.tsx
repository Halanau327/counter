import React, {useState} from 'react';
import {CounterField} from "./counterComponents/counterField/CounterField";
import {Button} from "./counterComponents/button/Button";


type CounterPropsType = {
    max: number
    start: number
    counterValue: number
    onIncrement: () => void
    onReset: () => void
    disableBtn: boolean
}

export const Counter = ({max, start, counterValue, onIncrement, onReset, disableBtn }: CounterPropsType) => {

    const isValidMax = max <= 0 || max <= start
    const isValidStart = start < 0 || start >= max

    return (
        <div className="container rightContainer">
            <CounterField  value={counterValue} isValidMax={isValidMax} isValidStart={isValidStart} max={max}/>
            <div className="buttonContainer">
                <Button title="inc" onClick={onIncrement} styles="myButton" disabled={isValidMax || isValidStart || counterValue === max} />
                <Button title="reset" onClick={onReset} styles="myButton" disabled={isValidMax || isValidStart} />
            </div>
        </div>
    );
};