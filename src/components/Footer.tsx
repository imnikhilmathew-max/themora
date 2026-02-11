import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Youtube } from 'lucide-react';

// Pinterest icon component (lucide doesn't have Pinterest, so we create a custom SVG)
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F1E8] border-t border-[#E5E1D8] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-xl tracking-tight text-[#2D3748] mb-2">Themora Daily</h3>
            <p className="text-sm text-[#6B7280] mb-4">
              Better Routines. Better Life.
            </p>
            <p className="text-sm text-[#6B7280] mb-6">
              Your trusted source for curated self-care, wellness, and lifestyle recommendations.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <motion.a
                href="https://www.pinterest.com/themoradaily"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-[#E5E1D8] flex items-center justify-center text-[#6B7280] hover:bg-[#9CAF88] hover:text-white transition-colors"
                aria-label="Visit our Pinterest"
              >
                <PinterestIcon className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://www.youtube.com/@themoradaily"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-[#E5E1D8] flex items-center justify-center text-[#6B7280] hover:bg-[#9CAF88] hover:text-white transition-colors"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm tracking-wide text-[#2D3748] mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Recommendations', path: '/recommendations' },
                { label: 'Journal', path: '/blog' },
                { label: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="text-sm text-[#6B7280] hover:text-[#9CAF88] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm tracking-wide text-[#2D3748] mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Affiliate Disclosure', path: '/affiliate-disclosure' },
                { label: 'Disclaimer', path: '/disclaimer' }
              ].map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="text-sm text-[#6B7280] hover:text-[#9CAF88] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#E5E1D8] mt-8 pt-8 text-center"
        >
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} Themora Daily. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}