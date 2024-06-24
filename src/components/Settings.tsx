import * as React from 'react';

import {Button} from "./counterComponents/Button";

type SettingsPropsType = {

};

export const Settings = ({}: SettingsPropsType) => {

    const onClickHandler = () => {

    }

    return (
        <div className="container">
            <div>
                <div className="valuesContainer">
                    <div>
                        <label></label>
                        <input type="number"/>
                    </div>

                </div>

                <div className="buttonContainer">
                    <Button title="set" onClick={onClickHandler} styles="myButton"/>
                </div>
            </div>
        </div>
    );
};