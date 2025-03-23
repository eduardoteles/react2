import { ReactNode } from "react";

interface Props{
    //children: string;
    children: ReactNode;
}

//Destruct so we don't need the "props."
const Alert = ({children}: Props)  => {
    return (
        <div className="alert alert-primary">{children}</div>
    );
}

export default Alert;