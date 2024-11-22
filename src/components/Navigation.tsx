import { Menu, X } from 'lucide-react';
import logo from '../../images/logo.png';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (section: string) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }: NavigationProps) {
  const menuItems = [
    { id: 'home', label: 'Домівочка' },
    { id: 'about', label: 'Про мене' },
    { id: 'pricing', label: 'Ціни' },
    { id: 'testimonials', label: 'Відгуки' },
    { id: 'contact', label: 'Контакти' }
  ];

  return (
    <nav className="fixed z-50 w-full pearl-bg">
      <div className="container px-4 py-3 mx-auto">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 transition-colors hover:text-azure"
          >
            <img 
              src={logo} 
              alt="Es Decir Logo" 
              className="h-16"
            />
          </button>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden space-x-6 md:flex">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-600 hover:bg-azure/20 transition-colors rounded-md px-3 py-1 ${
                  activeSection === item.id ? 'text-azure font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden pearl-bg">
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full px-3 py-2 text-left text-gray-600 transition-colors rounded-md hover:bg-azure/20"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}