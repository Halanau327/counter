type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled?: boolean
    styles?: string
}

export const Button = ({title, disabled, onClick, styles}: ButtonPropsType) => {
    return <button className={styles} onClick={onClick}  disabled={disabled}>
        {title}
    </button>
}