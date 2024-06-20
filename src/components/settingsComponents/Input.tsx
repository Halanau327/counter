// @flow
import * as React from 'react';
import {ChangeEvent, useState} from "react";

type InputPropsType = {
    maxValue?: number
    startValue?: number
};

export const Input = ({}: InputPropsType) => {
    const [value, setValue] = useState('')

    const changeItemHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(value)
        setValue(event.currentTarget.value)
    }

    return (
        <>
            <input  type="number" onChange={changeItemHandler}/>
        </>
    );
};