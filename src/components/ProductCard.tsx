import {motion} from 'motion/react';
import {Button} from './ui/Button';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export function ProductCard({product, onSelect, isSelected}: {product: Product, onSelect: () => void, isSelected: boolean}) {
  return (
    <motion.div
      whileHover={{y: -10}}
      className={`bg-white border p-4 group cursor-pointer ${isSelected ? 'border-amber-500' : 'border-stone-100'}`}
      onClick={onSelect}
    >
      <div className="overflow-hidden mb-4">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <h3 className="font-serif text-xl text-stone-950 mb-1">{product.name}</h3>
      <p className="text-sm text-stone-500 mb-4">{product.category}</p>
      <div className="flex justify-between items-center">
        <span className="font-sans font-medium text-stone-950">{product.price}</span>
        <Button className={`py-2 text-xs ${isSelected ? 'bg-amber-600' : 'bg-black'}`}>
          {isSelected ? 'Selected' : 'Select'}
        </Button>
      </div>
    </motion.div>
  );
}
