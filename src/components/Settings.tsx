import * as React from 'react';

import {Button} from "./counterComponents/button/Button";
import {Input} from "./counterComponents/Input";
import {FormEvent} from "react";

type SettingsPropsType = {
    onSetMax: (n: number) => void
    onSetStart: (n: number) => void
    start: number
    max: number
    set: () => void
    disableBtn: boolean
    onDisable: () => void
    onSubmit: () => void
};

export const Settings = ({onSetMax, onSetStart, start, max,set, disableBtn, onDisable, onSubmit}: SettingsPropsType) => {

    const isValidMax = max <= 0 || max <= start
    const isValidStart = start < 0 || start >= max

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="valuesContainer">
                    <div>
                        <div className="maxMinContainer">
                            <Input name="Max value"
                                   onChangeInput={onSetMax}
                                   type="number"
                                   value={max}
                                   isValid={isValidMax}
                                   onDisable={onDisable}
                            />
                        </div>
                        <div className="maxMinContainer">
                            <Input name="Start value"
                                   onChangeInput={onSetStart}
                                   type="number"
                                   value={start}
                                   isValid={isValidStart}
                                   onDisable={onDisable}
                            />
                        </div>
                    </div>
                </div>

                <div className="buttonContainer">
                    <Button disabled={!disableBtn || isValidMax || isValidStart} title="set" onClick={set} styles="myButton"/>
                </div>
            </form>
        </div>
    );
};