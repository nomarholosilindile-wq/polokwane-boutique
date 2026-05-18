import {Hero} from './Hero';
import {ProductCard} from './ProductCard';
import {motion} from 'motion/react';
import {useState} from 'react';

const featuredProducts = [
  {id: '1', name: 'Classic Suit', price: 'R 2,250', image: '/assets/suit1.jpeg', category: 'Formal'},
  {id: '2', name: 'Premium Blazer', price: 'R 2,100', image: '/assets/suit2.jpeg', category: 'Business'},
  {id: '3', name: 'Tuxedo Ensemble', price: 'R 2,400', image: '/assets/suit3.jpeg', category: 'Wedding'},
  {id: '4', name: 'Signature Suit', price: 'R 2,350', image: '/assets/suit4.jpeg', category: 'Formal'},
  {id: '5', name: 'Executive Set', price: 'R 2,200', image: '/assets/suit5.jpeg', category: 'Business'},
  {id: '6', name: 'Grooming Elegance', price: 'R 2,450', image: '/assets/suit6.jpeg', category: 'Wedding'},
  {id: '7', name: 'Sharp Modern Cut', price: 'R 2,150', image: '/assets/suit7.jpeg', category: 'Formal'},
  {id: '8', name: 'Sophisticated Blazer', price: 'R 2,300', image: '/assets/suit8.jpeg', category: 'Business'},
  {id: '9', name: 'Luxury Accessory', price: 'R 2,050', image: '/assets/suit9.jpeg', category: 'Accessories'},
  {id: '10', name: 'Formal Ensemble', price: 'R 700', image: '/assets/suit10.jpeg', category: 'Formal'},
  {id: '11', name: 'Business Sharp', price: 'R 2,400', image: '/assets/suit11.jpeg', category: 'Business'},
  {id: '12', name: 'Wedding Choice', price: 'R 2,200', image: '/assets/suit12.jpeg', category: 'Wedding'},
  {id: '13', name: 'Elegant Set', price: 'R 2,250', image: '/assets/suit13.jpeg', category: 'Formal'},
  {id: '14', name: 'Tailored Blazer', price: 'R 2,100', image: '/assets/suit14.jpeg', category: 'Business'},
  {id: '15', name: 'Special Tux', price: 'R 2,500', image: '/assets/suit15.jpeg', category: 'Wedding'},
  {id: '16', name: 'Modern Fit', price: 'R 2,150', image: '/assets/suit16.jpeg', category: 'Formal'},
  {id: '17', name: 'Luxury Business', price: 'R 2,200', image: '/assets/suit17.jpeg', category: 'Business'},
  {id: '18', name: 'Wedding Luxe', price: 'R 2,400', image: '/assets/suit18.jpeg', category: 'Wedding'},
  {id: '19', name: 'Classic Elegance', price: 'R 2,250', image: '/assets/suit19.jpeg', category: 'Formal'},
];

export function HomePage() {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const selectedProducts = featuredProducts.filter(p => selectedProductIds.includes(p.id));

  const toggleProductSelection = (productId: string) => {
    setSelectedProductIds(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const whatsappMessage = selectedProducts.length > 0
    ? `Hi, I'm interested in the following products:\n${selectedProducts.map(p => `- ${p.name} (${p.price})`).join('\n')}`
    : `Hi, I'm interested in your services.`;

  return (
    <>
      <Hero />
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-stone-950 mb-12 text-center">Featured Collection</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onSelect={() => toggleProductSelection(product.id)}
                isSelected={selectedProductIds.includes(product.id)}
              />
          ))}
        </div>
      </section>

      {selectedProducts.length > 0 && (
        <section className="py-10 bg-amber-50 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-stone-950 mb-6 text-center">Your Basket</h3>
            <div className="grid gap-4">
              {selectedProducts.map(product => (
                <div key={product.id} className="flex justify-between items-center bg-white p-4 border border-amber-200">
                  <span>{product.name} - {product.price}</span>
                  <button onClick={() => toggleProductSelection(product.id)} className="text-sm text-red-500 font-bold">Remove</button>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={`https://wa.me/27763013290?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-8 py-4 font-bold rounded-full hover:bg-green-700 transition-colors">Place Order on WhatsApp</a>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-stone-100 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-stone-950 mb-6">Tailored to Perfection</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">At POLOKWANE BOUTIQUE & JD CLOTHING, we believe every man deserves a suit that tells his story. Our collection is curated with the finest fabrics and designed to ensure you stand out in every boardroom and aisle.</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto text-center" id="contact">
        <h2 className="text-4xl font-serif font-bold text-stone-950 mb-12">Concierge Service</h2>
        <p className="text-stone-600 mb-8">Ready to find your perfect fit? Reach out to our expert stylists directly on WhatsApp for personalized advice and orders.</p>
        <a href={`https://wa.me/27763013290?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-8 py-4 font-bold rounded-full hover:bg-green-700 transition-colors">Chat on WhatsApp</a>
      </section>
    </>
  );
}
