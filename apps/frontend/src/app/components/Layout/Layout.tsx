import { Link, Outlet } from "react-router-dom";
import { ROUTE } from "../../routes";


export const Layout = () => {
    return (
        <div>
            <nav>
                <ul className="flex list-none">
                    <li className="mx-2">
                        <Link to={ROUTE.HOME}>Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link to={ROUTE.ABOUT}>About</Link>
                    </li>
                    <li className="mx-2">
                        <Link to={ROUTE.CONTACT}>Contact</Link>
                    </li>
                    <li className="mx-2">
                        <Link to={ROUTE.EMPLOYEES}>Employees</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <footer>&copy; 2024 MEWA</footer>
        </div>
    )
};