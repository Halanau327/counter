import * as React from 'react';
import {ChangeEvent} from "react";
import s from "./Input.module.css"

type InputPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    value: number
    onChangeInput: (value:number) => void
    isValid: boolean
};

export const Input = ({value, onChangeInput, name, isValid}: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(Number(e.currentTarget.value))
    }

    return (
        <label htmlFor={name}>
            <span>{`${name}:`}</span>
            <input type="number"
                   id={name}
                   onChange={onChangeHandler}
                   value={value}
                   className={`${isValid ? s.error : ""}`}
            />
        </label>
    );
};