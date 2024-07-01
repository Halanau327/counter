import * as React from 'react';

import {Button} from "./counterComponents/button/Button";
import {Input} from "./counterComponents/Input";

type SettingsPropsType = {
    onSetMax: (n: number) => void
    onSetStart: (n: number) => void
    start: number
    max: number
    set:() => void

};

export const Settings = ({onSetMax, onSetStart, start, max,set}: SettingsPropsType) => {

    const isValidMax = max <= 0 || max <= start
    const isValidStart = start < 0 || start >= max

    const buttonSetHandler = () => {


    }

    return (
        <div className="container">
            <div>
                <div className="valuesContainer">
                    <div>
                        <div className="maxMinContainer">
                            <Input name="max value"
                                   onChangeInput={onSetMax}
                                   type="number"
                                   value={max}
                                   isValid={isValidMax}
                            />

                        </div>
                        <div className="maxMinContainer">
                            <Input name="start value"
                                   onChangeInput={onSetStart}
                                   type="number"
                                   value={start}
                                   isValid={isValidStart}
                            />

                        </div>
                    </div>
                </div>

                <div className="buttonContainer">
                    <Button disabled={isValidStart} title="set" onClick={set} styles="myButton"/>
                </div>
            </div>
        </div>
    );
};