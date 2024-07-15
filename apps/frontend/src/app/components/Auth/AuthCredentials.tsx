import { MouseEventHandler, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Button } from "@ems/common-ui";

export const AuthCredentials = () => {
    const context = useContext(AuthContext);

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        context.setIsLogged((value) => !value);
    }

    return (
        <div>
            <h3>AuthCredentials</h3>
            <p>Is user logged? {context.isLoggedIn ? 'YES' : 'NO'}</p>
            <Button onClick={handleClick} label='Toggle' />
        </div>
    );
};