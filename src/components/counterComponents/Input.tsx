import * as React from 'react';
import {ChangeEvent} from "react";


type InputPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    value: number
    onChangeInput: (value:number) => void
};


export const Input = ({value, onChangeInput, name}:InputPropsType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChangeInput(Number(e.currentTarget.value))
    }




    return (
        <label htmlFor={name}>
        <span>{`${name}:`}</span>
            <input type="number"
                   id={name}
                   onChange={onChangeHandler}





            />
        </label>
    );
};