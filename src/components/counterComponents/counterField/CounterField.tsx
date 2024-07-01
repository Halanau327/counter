import s from "./CounterField.module.css"

type CounterFieldPropsType = {
    value: any
    styles?: string
    isValidMax: boolean
    isValidStart: boolean
    max: number
}

export const CounterField = ({value, styles, isValidMax, isValidStart, max}:CounterFieldPropsType) => {
    return (
        <div className="counterContainer">
            {
                isValidMax || isValidStart  ? 'Incorrect value!' : <span className={value === max ? s.maxValue: value}>{value}</span>
            }
        </div>
    );
};

