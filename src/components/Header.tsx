import Link from 'next/link';

export function Header() {
  const navLinks = ['Product', 'Teams', 'Resources', 'Community', 'Support', 'Enterprise', 'Pricing'];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/10">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold">F</Link>
        <nav className="hidden md:flex gap-6 text-sm text-zinc-400">
          {navLinks.map(link => (
            <Link key={link} href="#" className="hover:text-white transition-colors">
              {link}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Link href="#" className="text-white">Log in</Link>
        <Link href="#" className="bg-white text-black px-4 py-2 rounded-full font-medium">
          Sign up
        </Link>
      </div>
    </header>
  );
}
