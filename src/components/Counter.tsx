import React, {useState} from 'react';
import {CounterValue} from "./counterComponents/CounterValue";
import {Button} from "./counterComponents/Button";

export const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(0)


    // const maxValue = 5
    // const minValue = 0;

    const isIncreaseOn = count === maxValue
    const isResetOn = count === minValue

    const onIncrementClick = () => {
        if (count < maxValue) {
            setCount(count + 1);
        }
    };

    const onResetClick = () => {
        setCount(minValue);
    };

    return (
        <div className="container rightContainer">
            <CounterValue styles={isIncreaseOn ? "red" : "common"} value={count}/>
            <div className="buttonContainer">
                <Button title="inc" onClick={onIncrementClick} styles="myButton" disabled={isIncreaseOn}/>
                <Button title="reset" onClick={onResetClick} styles="myButton" disabled={isResetOn}/>
            </div>
        </div>
    );
};