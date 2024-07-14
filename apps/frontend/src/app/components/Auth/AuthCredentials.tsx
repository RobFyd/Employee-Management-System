import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
    const context = useContext(AuthContext);
    return (
        <div>
            <h3>AuthCredentials</h3>
            <p>Is user logged? {context.isLoggedIn ? 'YES' : 'NO'}</p>
        </div>
    );
}