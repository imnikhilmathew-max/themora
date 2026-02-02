import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Footer() {
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
            <p className="text-sm text-[#6B7280]">
              Your trusted source for curated self-care, wellness, and lifestyle recommendations.
            </p>
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
                  <Link to={link.path} className="text-sm text-[#6B7280] hover:text-[#9CAF88] transition-colors">
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
                  <Link to={link.path} className="text-sm text-[#6B7280] hover:text-[#9CAF88] transition-colors">
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