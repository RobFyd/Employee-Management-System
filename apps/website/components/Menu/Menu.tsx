'use client';

import { classMerge } from '@ems/common-ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Menu = () => {
  const pathName = usePathname();

  const buildCssClass = (path: string) => {
    return classMerge('text-lg text-white hover:text-yellow-600', { 'text-yellow-600': path === pathName });
  };

  return (
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
  );
};
