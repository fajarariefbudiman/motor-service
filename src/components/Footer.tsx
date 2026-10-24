import digiatLogo from "../assets/digiat.png";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "Layanan", href: "#layanan" },
    { label: "Proses", href: "#proses" },
    { label: "Tentang", href: "#tentang" },
    { label: "Kontak", href: "#kontak" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className='py-16 bg-gray-900 border-t border-gray-800'>
      <div className='max-w-7xl mx-auto container-padding'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='grid md:grid-cols-3 gap-12 mb-12'
        >
          {/* Brand */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <img
                src={digiatLogo}
                alt='Logo DiGiatGroup'
                className='w-9 h-9 object-contain'
              />
              <span className='text-2xl font-bold text-primary-foreground'>
                DiGiatGroup
              </span>
            </div>
            <p className='text-gray-400 leading-relaxed mb-6'>
              Bengkel motor terpercaya dengan teknisi profesional bersertifikat.
              Garansi 30 hari untuk setiap service.
            </p>
            {/* Social Links */}
            <div className='flex gap-3'>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors duration-200'
                  aria-label={link.label}
                >
                  <link.icon className='w-5 h-5 text-gray-400' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold text-primary-foreground mb-4'>
              Menu
            </h4>
            <ul className='space-y-3'>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-primary-foreground transition-colors duration-200'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-lg font-semibold text-primary-foreground mb-4'>
              Kontak
            </h4>
            <div className='space-y-3 text-gray-400'>
              <p>Jl. Raya Motor No. 123</p>
              <p>Jakarta Selatan 12345</p>
              <p className='text-accent-blue font-medium'>0812-3456-789</p>
              <p>Senin - Sabtu: 08:00 - 17:00</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-500'>
              © {new Date().getFullYear()} DiGiatGroup. Template demo Moto
              Service.
            </p>
            <p className='text-sm text-gray-500'>Dibuat dengan ❤️ di Jakarta</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
