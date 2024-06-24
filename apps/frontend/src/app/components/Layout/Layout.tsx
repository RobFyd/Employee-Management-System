import { Link, Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/employees">Employees</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <footer>&copy; 2024 MEWA</footer>
        </div>
    )
};