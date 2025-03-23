interface Props{
    text: string;
}

//Destruct so we don't need the "props."
const Alert = ({text}: Props)  => {
    return (
        <div className="alert alert-primary">{text}</div>
    );
}

export default Alert;