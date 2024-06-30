import * as React from 'react';

import {Button} from "./counterComponents/Button";
import {Input} from "./counterComponents/Input";

type SettingsPropsType = {
    onSetMax: (n: number) => void
    onSetStart: (n: number) => void
    start: number
    max: number
    set:() => void
};

export const Settings = ({onSetMax, onSetStart, start, max,set}: SettingsPropsType) => {

    const onClickHandler = () => {

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
                            />
                        </div>
                        <div className="maxMinContainer">
                            <Input name="start value"
                                   onChangeInput={onSetStart}
                                   type="number"
                                   value={start}
                            />

                        </div>
                    </div>
                </div>

                <div className="buttonContainer">
                    <Button title="set" onClick={set} styles="myButton"/>
                </div>
            </div>
        </div>
    );
};