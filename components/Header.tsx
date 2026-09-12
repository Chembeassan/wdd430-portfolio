import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#b45309] to-[#f59e0b] text-white py-5 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition">
          Chembe Assan
        </Link>
        <nav>
          <ul className="flex gap-8 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-[#fef3c7] transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#fef3c7] transition-colors duration-200">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}