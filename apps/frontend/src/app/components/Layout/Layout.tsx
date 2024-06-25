import { Link, Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <div>
            <nav>
                <ul className="flex list-none">
                    <li className="mx-2">
                        <Link to="home">Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/employees">Employees</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <footer>&copy; 2024 MEWA</footer>
        </div>
    )
};