import {motion} from 'motion/react';
import {ReactNode} from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({children, variant = 'primary', onClick, className = '', type = 'button'}: ButtonProps) {
  const baseStyle = "px-8 py-3 font-sans font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-stone-950 text-white hover:bg-stone-800",
    outline: "border border-stone-800 text-stone-950 hover:bg-stone-100",
  };

  return (
    <motion.button
      whileHover={{scale: 1.02}}
      whileTap={{scale: 0.98}}
      onClick={onClick}
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
