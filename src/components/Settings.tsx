import * as React from 'react';
import {Input} from "./settingsComponents/Input";
import {Button} from "./counterComponents/Button";
import {useState} from "react";

type SettingsPropsType = {

};


export const Settings = ({}: SettingsPropsType) => {


    const [startValue, setStartValue] = useState(0)

    const onClickHandler = () => {

    }

    return (
        <div className="container">
            <div>
                <div className="valuesContainer">
                    <div className="inputContainer">max value: <Input/></div>
                    <div className="inputContainer">start value: <Input/></div>
                </div>

                <div className="buttonContainer">
                    <Button title="set" onClick={onClickHandler} styles="myButton"/>
                </div>
            </div>
        </div>
    );
};