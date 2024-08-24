import Link from 'next/link';

export const Menu = () => {
  return (
    <nav className="container bg-slate-800">
      <ul className="flex">
        <li className="mr-6">
          <Link href="/about" className="text-lg text-white">
            About
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/job-offers" className="text-lg text-white">
            Job offers
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/reviews" className="text-lg text-white">
            Reviews
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/contact" className="text-lg text-white">
            Contact
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/dashboard" className="text-lg text-white">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};
