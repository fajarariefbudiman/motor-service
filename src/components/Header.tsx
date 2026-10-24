import digiatLogo from "../assets/digiat.png";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Layanan", href: "#layanan" },
    { label: "Proses Service", href: "#proses" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header className='fixed top-0 left-0 right-0 z-50 h-[72px] bg-card border-b border-border'>
      <div className='max-w-7xl mx-auto h-full container-padding flex items-center justify-between'>
        {/* Logo */}
        <a href='#top' className='flex items-center gap-2'>
          <img
            src={digiatLogo}
            alt='Logo DiGiatGroup'
            className='w-9 h-9 object-contain'
          />
          <span className='text-xl sm:text-2xl font-bold text-gray-800'>
            DiGiatGroup
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='text-muted-foreground hover:text-gray-900 transition-colors duration-200 font-medium'
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Hotline Button */}
        <div className='hidden md:block'>
          <Button variant='hotline' size='default'>
            <Phone className='w-4 h-4' />
            <span>0812-3456-789</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? (
            <X className='w-6 h-6 text-gray-800' />
          ) : (
            <Menu className='w-6 h-6 text-gray-800' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden fixed top-[72px] right-0 bottom-0 w-64 bg-card border-l border-border z-50'>
          <nav className='flex flex-col p-6 gap-4'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='text-muted-foreground hover:text-gray-900 transition-colors duration-200 font-medium py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant='hotline' size='default' className='mt-4'>
              <Phone className='w-4 h-4' />
              <span>0812-3456-789</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
