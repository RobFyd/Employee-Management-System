import { Menu } from "./Menu";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
            <Footer />
        </div>
    )
};