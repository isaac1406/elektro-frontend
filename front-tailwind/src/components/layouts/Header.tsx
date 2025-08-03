import { Menu, ShoppingCart } from 'lucide-react';

// props que Header irá receber
interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="w-full h-[72px] bg-[rgba(43,43,43,1)] flex items-center p-4 rounded-b-xl">
      <div className="flex justify-between w-full">
        <Menu 
          className="w-6 h-6 text-white cursor-pointer" 
          onClick={onMenuClick} 
        />

        <ShoppingCart className="w-6 h-6 text-white" />
      </div>
    </header>
  );
}