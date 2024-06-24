type CounterFieldPropsType = {
    value: number
    styles?: string
}

export const CounterField = ({value, styles}:CounterFieldPropsType) => {
    return (
        <div className="counterContainer">
            <span className={styles}>{value}</span>
        </div>
    );
};

