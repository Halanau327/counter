import s from "./CounterField.module.css"

type CounterFieldPropsType = {
    value: any
    isValidMax: boolean
    isValidStart: boolean
    max: number
}

export const CounterField = ({value, isValidMax, isValidStart, max}:CounterFieldPropsType) => {
    return (
        <div className="counterContainer">
            {
                isValidMax || isValidStart  ? 'Incorrect value!' : <span className={value === max ? s.maxValue: value}>{value}</span>
            }
        </div>
    );
};

