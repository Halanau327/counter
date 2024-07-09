import * as React from 'react';
import {ChangeEvent} from "react";
import s from "./Input.module.css"

type InputPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    value: number
    onChangeInput: (value:number) => void
    isValid: boolean
    onDisable: () => void
};

export const Input = ({value, onChangeInput, name, isValid, onDisable}: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(Number(e.currentTarget.value))
    }

    const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.id === "Max value" || e.target.id === "Start value") {
            if (onDisable) {
                onDisable()
            }
        }
    }

    return (
        <label htmlFor={name}>
            <span>{`${name}:`}</span>
            <input type="number"
                   id={name}
                   onChange={onChangeHandler}
                   onFocus={onFocusHandler}
                   value={value}
                   className={`${isValid ? s.error : ""}`}
            />
        </label>
    );
};