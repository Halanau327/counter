import * as React from 'react';

import {Button} from "./counterComponents/Button";
import {Input} from "./counterComponents/Input";

type SettingsPropsType = {
    onSetMax: (n:number) => void
    onSetStart: (n:number) => void
};

export const Settings = ({onSetMax, onSetStart}: SettingsPropsType) => {

    const onClickHandler = () => {

    }

    return (
        <div className="container">
            <div>
                <div className="valuesContainer">
                    <div>
                        <div className="maxMinContainer">
                          <Input onChangeInput={onSetMax}/>
                        </div>
                        <div className="maxMinContainer">
                            <Input onChangeInput={onSetStart}/>

                        </div>
                    </div>
                </div>

                <div className="buttonContainer">
                    <Button title="set" onClick={onClickHandler} styles="myButton"/>
                </div>
            </div>
        </div>
    );
};