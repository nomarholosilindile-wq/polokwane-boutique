import {Facebook, Music} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-xl font-bold mb-4">POLOKWANE BOUTIQUE | JD CLOTHING</h3>
          <p className="text-stone-400 text-sm">Luxury menswear for the modern gentleman.</p>
        </div>
        <div>
          <h4 className="font-sans font-bold mb-4">Quick Links</h4>
          <ul className="text-stone-400 text-sm space-y-2">
            <li>Shop</li>
            <li>Collections</li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-bold mb-4">Contact</h4>
          <ul className="text-stone-400 text-sm space-y-2">
            <li>WhatsApp: 076 301 3290</li>
            <li>Email: polokwanebotique@gmail.com</li>
            <li>
              <a href="https://www.facebook.com/polokwaneboutique" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-400 hover:text-white">
                <Facebook size={16} /> Facebook: Polokwane Boutique
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@polokwaneboutique" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-400 hover:text-white">
                <Music size={16} /> TikTok: Polokwane Boutique
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-stone-700 text-xs mt-12 border-t border-stone-800 pt-8">
        &copy; 2026 POLOKWANE BOUTIQUE. All rights reserved.
      </div>
    </footer>
  );
}
