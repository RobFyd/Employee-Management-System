import { montserrat } from "apps/website/app/fonts";


export const Footer = () => {
    return (
        <footer className={`${montserrat.className} w-screen bg-slate-900 mx-auto p-4`}>
            <p className="text-center text-base text-white">
                © 2024 All rights reserved
            </p>
        </footer>
    )
};