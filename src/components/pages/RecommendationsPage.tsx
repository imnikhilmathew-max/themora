import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function RecommendationsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const products = {
    skincare: [
      {
        name: 'Cetaphil Gentle Skin Cleanser',
        description: 'A dermatologist-recommended gentle cleanser suitable for all skin types, including sensitive skin.',
        reason: 'pH-balanced formula that cleanses without stripping natural oils. Trusted by dermatologists worldwide and gentle enough for daily use.',
        category: 'Skincare',
        image: 'https://images.unsplash.com/photo-1556228720-9b1e04f13f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGNsZWFuc2VyJTIwYm90dGxlJTIwcHJvZHVjdHxlbnwxfHx8fDE3Njk5MDA3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'Neutrogena Hydro Boost Water Gel',
        description: 'Lightweight, oil-free moisturizer with hyaluronic acid for intense hydration.',
        reason: 'Provides long-lasting hydration without feeling heavy. Perfect for Indian climate and works well under makeup.',
        category: 'Skincare',
        image: 'https://images.unsplash.com/photo-1763503836825-97f5450d155a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2lzdHVyaXplciUyMGNyZWFtJTIwamFyJTIwcHJvZHVjdHxlbnwxfHx8fDE3Njk5ODEwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'La Roche-Posay Anthelios Sunscreen SPF 50',
        description: 'Broad-spectrum UV protection with lightweight, non-greasy formula.',
        reason: 'Essential daily protection against sun damage. Suitable for all skin types and doesn\'t leave a white cast.',
        category: 'Skincare',
        image: 'https://images.unsplash.com/photo-1594332322527-08753d4473c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zY3JlZW4lMjBib3R0bGUlMjBza2luY2FyZXxlbnwxfHx8fDE3Njk5NjY1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'Beardo Beard & Hair Growth Oil',
        description: 'Natural oil blend for beard conditioning and hair nourishment.',
        reason: 'Contains natural ingredients like almond oil and jojoba. Helps maintain healthy beard and promotes softer hair texture.',
        category: 'Grooming',
        image: 'https://images.unsplash.com/photo-1655241406159-78b405cebb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMG9pbCUyMGdyb29taW5nJTIwcHJvZHVjdHxlbnwxfHx8fDE3Njk4NzUzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      }
    ],
    wellness: [
      {
        name: 'Neuherbs Omega-3 Fish Oil Capsules',
        description: 'High-quality omega-3 supplement supporting heart and brain health.',
        reason: 'Sourced from deep-sea fish with good EPA/DHA ratio. Important for those who don\'t consume enough fatty fish in their diet.',
        category: 'Supplements',
        image: 'https://images.unsplash.com/photo-1576437293196-fc3080b75964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWVnYSUyMGZpc2glMjBvaWwlMjBjYXBzdWxlc3xlbnwxfHx8fDE3Njk5Njc4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'Himalaya Ashwagandha Tablets',
        description: 'Traditional Ayurvedic adaptogen for stress management and overall wellness.',
        reason: 'Well-established brand with quality control. Ashwagandha is backed by research for stress reduction and energy support.',
        category: 'Supplements',
        image: 'https://images.unsplash.com/photo-1740592754365-2117f5977528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBzdXBwbGVtZW50JTIwdGFibGV0c3xlbnwxfHx8fDE3Njk5ODEwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'Healthvit Vitamin D3',
        description: 'Essential vitamin D supplement for bone health and immunity.',
        reason: 'Many people are deficient in Vitamin D, especially those with limited sun exposure. Important for overall health.',
        category: 'Supplements',
        image: 'https://images.unsplash.com/photo-1763668331599-487470fb85b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwc3VwcGxlbWVudCUyMGJvdHRsZXxlbnwxfHx8fDE3Njk5MzA5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'Organic India Tulsi Green Tea',
        description: 'Caffeine-free herbal tea combining tulsi with green tea benefits.',
        reason: 'Great for daily wellness routine. Tulsi is traditionally used for stress relief and overall vitality.',
        category: 'Wellness',
        image: 'https://images.unsplash.com/photo-1566373104181-133b57c9fd98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc2OTk4MTA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      }
    ],
    style: [
      {
        name: 'Nike Revolution Running Shoes',
        description: 'Comfortable, versatile running shoes suitable for daily wear and light exercise.',
        reason: 'Good cushioning and support for everyday activities. Durable construction and widely available in India.',
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1739138056250-8fe572213417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwcnVubmluZyUyMHNob2VzJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY5OTgxMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'Adidas Ultraboost Sneakers',
        description: 'Premium comfort sneakers with responsive cushioning technology.',
        reason: 'Exceptional comfort for all-day wear. Stylish enough for casual outings while providing excellent foot support.',
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1618545647089-da834ede280c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjB1bHRyYWJvb3N0JTIwc25lYWtlcnMlMjB3aGl0ZXxlbnwxfHx8fDE3Njk5ODEwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'Bata Comfit Casual Shoes',
        description: 'Affordable, comfortable everyday shoes for work and casual occasions.',
        reason: 'Reliable Indian brand with good value for money. Comfortable for long hours of wear.',
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1616663308968-58162d332720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBsZWF0aGVyJTIwc2hvZXMlMjBicm93bnxlbnwxfHx8fDE3Njk5ODEwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'Wildcraft Backpack',
        description: 'Durable, ergonomic backpack for daily commute and travel.',
        reason: 'Well-designed with good organization pockets. Comfortable for daily use and built to last.',
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1760909148912-1f3f45ab3f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY5OTgxMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      }
    ],
    books: [
      {
        name: 'Atomic Habits by James Clear',
        description: 'Practical guide to building good habits and breaking bad ones through small changes.',
        reason: 'One of the most practical books on habit formation. Clear, actionable advice backed by research.',
        category: 'Personal Growth',
        image: 'https://images.unsplash.com/photo-1598301257942-e6bde1d2149b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG9taWMlMjBoYWJpdHMlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY5OTgxMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'The Psychology of Money by Morgan Housel',
        description: 'Timeless lessons on wealth, greed, and happiness through the lens of psychology.',
        reason: 'Excellent for understanding financial behavior and decision-making. Relevant for all income levels.',
        category: 'Personal Finance',
        image: 'https://images.unsplash.com/photo-1565514417878-a66a6b0f2c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGZpbmFuY2UlMjBib29rfGVufDF8fHx8MTc2OTk4MTA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'Deep Work by Cal Newport',
        description: 'Rules for focused success in a distracted world.',
        reason: 'Essential read for improving productivity and concentration. Particularly relevant in our digital age.',
        category: 'Productivity',
        image: 'https://images.unsplash.com/photo-1658842042779-dc9ab3125690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBzZWxmJTIwaGVscCUyMGJvb2tzfGVufDF8fHx8MTc2OTk4MTA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        name: 'The 5 AM Club by Robin Sharma',
        description: 'Guide to owning your morning and elevating your life through early rising routines.',
        reason: 'Practical framework for morning routines. Helpful for those looking to optimize their daily schedule.',
        category: 'Personal Growth',
        image: 'https://images.unsplash.com/photo-1613926161474-fcc7a939e051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGdyb3d0aCUyMGJvb2tzJTIwc3RhY2t8ZW58MXx8fHwxNzY5OTgxMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      }
    ]
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#F5F1E8] py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl tracking-tight text-[#2D3748] mb-6"
          >
            Our Recommendations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#6B7280] leading-relaxed"
          >
            Carefully curated products to help you build better daily routines. Each recommendation
            is chosen based on research, user reviews, and genuine value.
          </motion.p>
        </motion.div>
      </section>

      {/* Skincare & Grooming */}
      <section id="skincare-and-grooming" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl tracking-tight text-[#2D3748] mb-4">Skincare & Grooming</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl">
              Quality skincare and grooming products that work. We focus on gentle, effective formulations
              from trusted brands that deliver consistent results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.skincare.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg border border-[#E5E1D8] overflow-hidden hover:border-[#9CAF88] transition-colors"
              >
                <motion.div 
                  className="h-56 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="text-xs text-[#9CAF88] bg-[#F5F1E8] px-3 py-1 rounded-full"
                    >
                      {product.category}
                    </motion.span>
                  </div>
                  <h3 className="text-xl text-[#2D3748] mb-3">{product.name}</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">{product.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-[#2D3748] mb-2">Why we recommend it:</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{product.reason}</p>
                  </div>
                  <motion.a
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    href="https://www.amazon.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#9CAF88] hover:text-[#8A9E78] transition-colors"
                  >
                    View on Amazon
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness & Supplements */}
      <section id="wellness-and-supplements" className="bg-[#F5F1E8] py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl tracking-tight text-[#2D3748] mb-4">Wellness & Supplements</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl">
              Supplements and wellness products to support your health goals. Always consult with
              healthcare professionals before starting any new supplement regimen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.wellness.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg border border-[#E5E1D8] overflow-hidden hover:border-[#9CAF88] transition-colors"
              >
                <motion.div 
                  className="h-56 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="text-xs text-[#9CAF88] bg-[#F5F1E8] px-3 py-1 rounded-full"
                    >
                      {product.category}
                    </motion.span>
                  </div>
                  <h3 className="text-xl text-[#2D3748] mb-3">{product.name}</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">{product.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-[#2D3748] mb-2">Why we recommend it:</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{product.reason}</p>
                  </div>
                  <motion.a
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    href="https://www.amazon.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#9CAF88] hover:text-[#8A9E78] transition-colors"
                  >
                    Check price on Amazon
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Essentials */}
      <section id="style-essentials" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl tracking-tight text-[#2D3748] mb-4">Style Essentials</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl">
              Comfortable, practical everyday essentials. We focus on quality footwear and accessories
              that offer good value and long-term durability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.style.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg border border-[#E5E1D8] overflow-hidden hover:border-[#9CAF88] transition-colors"
              >
                <motion.div 
                  className="h-56 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="text-xs text-[#9CAF88] bg-[#F5F1E8] px-3 py-1 rounded-full"
                    >
                      {product.category}
                    </motion.span>
                  </div>
                  <h3 className="text-xl text-[#2D3748] mb-3">{product.name}</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">{product.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-[#2D3748] mb-2">Why we recommend it:</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{product.reason}</p>
                  </div>
                  <motion.a
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    href="https://www.amazon.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#9CAF88] hover:text-[#8A9E78] transition-colors"
                  >
                    View on Amazon
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books & Learning */}
      <section id="books-and-learning" className="bg-[#F5F1E8] py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl tracking-tight text-[#2D3748] mb-4">Books & Learning</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl">
              Personal growth books that offer practical insights and actionable advice. Each book is
              chosen for its genuine value and real-world applicability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.books.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg border border-[#E5E1D8] overflow-hidden hover:border-[#9CAF88] transition-colors"
              >
                <motion.div 
                  className="h-56 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="text-xs text-[#9CAF88] bg-[#F5F1E8] px-3 py-1 rounded-full"
                    >
                      {product.category}
                    </motion.span>
                  </div>
                  <h3 className="text-xl text-[#2D3748] mb-3">{product.name}</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">{product.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-[#2D3748] mb-2">Why we recommend it:</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{product.reason}</p>
                  </div>
                  <motion.a
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    href="https://www.amazon.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#9CAF88] hover:text-[#8A9E78] transition-colors"
                  >
                    View on Amazon
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-[#FAF9F7] border-t border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-xl text-[#2D3748] mb-4">Important Note</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-3">
              These recommendations are based on research and user reviews, but individual results may vary.
              For supplements and wellness products, always consult healthcare professionals before use,
              especially if you have existing health conditions or take medications.
            </p>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Product links are affiliate links—we may earn a small commission if you make a purchase,
              at no extra cost to you. This helps us maintain the site and continue providing helpful content.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}