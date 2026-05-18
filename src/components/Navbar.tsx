import {motion} from 'motion/react';
import {ShoppingBag, Menu, X, Whatsapp} from 'lucide-react';
import {useState} from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assets/logo.jpeg" alt="Logo" className="w-auto h-12" />
        </div>

        <div className="hidden md:flex gap-8 font-sans text-stone-600">
          {['Shop', 'Collections', 'About', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-stone-950 transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="p-2 text-stone-950"><ShoppingBag /></button>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
