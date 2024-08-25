'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { Menu } from '../../components';
import { Footer } from '../../components/Footer';

// export const metadata = {
//     title: 'Welcome to website',
//     description: 'Generated by create-nx-workspace',
// };

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const pathName = usePathname();

    const buildCssClass = (path: string) => {
        let classes = 'text-lg text-white';
        if (path === pathName) {
            classes = `${classes} text-red-500`;
        }
        return classes;
    };

    return (
        <div className="flex flex-col h-screen">
            {/* <Menu /> */}
            <nav className="bg-slate-900">
                <div className="mx-auto p-4">
                    <div className="flex justify-between">
                        <ul className="flex">
                            <li className="mr-6">
                                <Link href="/about" className={buildCssClass('/about')}>
                                    About
                                </Link>
                            </li>
                            <li className="mr-6">
                                <Link href="/job-offers" className={buildCssClass('/job-offers')}>
                                    Job offers
                                </Link>
                            </li>
                            <li className="mr-6">
                                <Link href="/reviews" className={buildCssClass('/reviews')}>
                                    Reviews
                                </Link>
                            </li>
                            <li className="mr-6">
                                <Link href="/contact" className={buildCssClass('/contact')}>
                                    Contact
                                </Link>
                            </li>
                            <li className="mr-6">
                                <Link href="/dashboard" className={buildCssClass('/dashboard')}>
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <main className="container h-screen mx-auto px-4 pt-6">
                {children}
            </main>
            <Footer />
        </div>
    );
}