type CounterValuePropsType = {
    value: number
    styles?: string
}

export const CounterValue = ({value, styles}:CounterValuePropsType) => {
    return (
        <div className="counterContainer">
            <span className={styles}>{value}</span>
        </div>
    );
};

