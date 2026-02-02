import { Link } from 'react-router-dom';
import { Sparkles, Heart, Book, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'framer-motion';

export function HomePage() {
  const categories = [
    {
      icon: Sparkles,
      title: 'Skincare & Grooming',
      description: 'Evidence-based recommendations for healthy skin and daily grooming routines.',
      image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGdyb29taW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzY5OTgwMTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Heart,
      title: 'Wellness & Supplements',
      description: 'Thoughtfully curated wellness products to support your daily health goals.',
      image: 'https://images.unsplash.com/photo-1630961012971-8282eff661f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHN1cHBsZW1lbnRzJTIwbmF0dXJhbHxlbnwxfHx8fDE3Njk5NzQzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: ShoppingBag,
      title: 'Style Essentials',
      description: 'Everyday fashion basics and comfortable footwear for modern living.',
      image: 'https://images.unsplash.com/photo-1550859700-7393c69d3fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvZXMlMjBtaW5pbWFsfGVufDF8fHx8MTc2OTk4MDEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Book,
      title: 'Books & Learning',
      description: 'Personal growth books and resources for continuous self-improvement.',
      image: 'https://images.unsplash.com/photo-1761609782256-b1a813dbfcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBwZXJzb25hbCUyMGdyb3d0aHxlbnwxfHx8fDE3Njk5ODAxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#F5F1E8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl tracking-tight text-[#2D3748] mb-6"
              >
                Build Better Daily Routines
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-[#6B7280] mb-8 leading-relaxed"
              >
                Themora Daily helps you simplify self-care and everyday living through honest,
                research-driven recommendations. No fluff, no false promises—just practical products
                that support healthier habits.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/recommendations"
                    className="bg-[#9CAF88] text-white px-6 py-3 rounded-md hover:bg-[#8A9E78] transition-colors inline-block"
                  >
                    Explore Our Recommendations
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/blog"
                    className="bg-white text-[#2D3748] px-6 py-3 rounded-md border border-[#E5E1D8] hover:border-[#9CAF88] transition-colors inline-block"
                  >
                    Read Our Journal
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558632218-4d2bc591f898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc2VsZiUyMGNhcmUlMjB3ZWxsbmVzcyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3Njk5ODAxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Minimal self-care lifestyle"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl tracking-tight text-[#2D3748] mb-4">
              What We Cover
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Our recommendations span four key areas of daily life, each carefully curated to help you build better routines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  to={`/recommendations#${category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="bg-white rounded-lg overflow-hidden border border-[#E5E1D8] hover:border-[#9CAF88] transition-colors cursor-pointer h-full"
                  >
                    <motion.div 
                      className="h-48 overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="p-6">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="w-12 h-12 bg-[#F5F1E8] rounded-full flex items-center justify-center mb-4"
                      >
                        <Icon className="w-6 h-6 text-[#9CAF88]" />
                      </motion.div>
                      <h3 className="text-xl text-[#2D3748] mb-2">{category.title}</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{category.description}</p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Choose Section */}
      <section className="bg-[#F5F1E8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl tracking-tight text-[#2D3748] mb-6"
            >
              How We Choose Our Recommendations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#6B7280] mb-8 leading-relaxed"
            >
              Every product we recommend is selected based on research, user reviews, and real-world
              experience. We focus on quality, value, and products that genuinely fit into daily routines.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[#6B7280] leading-relaxed"
            >
              We believe in transparency. We're not here to push products—we're here to help you make
              informed decisions about what works for your lifestyle.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Affiliate Disclaimer Section */}
      <section className="py-12 bg-[#FAF9F7] border-t border-b border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-xl text-[#2D3748] mb-3">Affiliate Disclosure</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-3">
              Some links on this website are affiliate links, which means we may earn a small commission
              if you make a purchase through them, at no additional cost to you. This helps us maintain
              the site and continue providing helpful content.
            </p>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              We only recommend products we genuinely believe in. Our opinions are always honest and independent.{' '}
              <Link to="/affiliate-disclosure" className="text-[#9CAF88] hover:underline">
                Read our full affiliate disclosure
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl tracking-tight text-[#2D3748] mb-6"
          >
            Ready to Improve Your Routine?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto"
          >
            Browse our curated recommendations and discover products that fit seamlessly into your daily life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/recommendations"
              className="inline-block bg-[#9CAF88] text-white px-8 py-3 rounded-md hover:bg-[#8A9E78] transition-colors"
            >
              Browse Daily Essentials
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}