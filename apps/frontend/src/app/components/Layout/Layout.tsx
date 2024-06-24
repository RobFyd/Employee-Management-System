import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <div>
            <nav></nav>
            <Outlet />
            <footer>&copy; 2024 MEWA</footer>
        </div>
    )
};