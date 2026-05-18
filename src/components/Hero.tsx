import {motion} from 'motion/react';
import {Button} from './ui/Button';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-stone-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        <motion.h2 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          className="text-sm font-sans tracking-[0.2em] uppercase mb-4"
        >
          Luxury Menswear Redefined
        </motion.h2>
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2}}
          className="mb-8"
        >
          <img src="/assets/logo.jpeg" alt="Logo" className="w-auto h-32 md:h-48 mx-auto" />
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.4}}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <Button>View Collections</Button>
          <Button variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">Order on WhatsApp</Button>
        </motion.div>
      </div>
    </section>
  );
}
