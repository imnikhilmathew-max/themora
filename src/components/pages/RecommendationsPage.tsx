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
        name: 'Cetaphil Gentle Skin Cleanser for Dry, Normal Sensitive Skin',
        description: 'A mild, non-comedogenic cleanser designed to gently cleanse while maintaining the skin’s natural moisture balance. Ideal for daily use on dry to normal skin types.',
        reason: 'Why we recommend it: Gentle micellar technology effectively removes dirt, makeup, and impurities without stripping the skin. Clinically tested hydration helps keep skin feeling comfortable and hydrated after cleansing',
        category: 'Skincare',
        image: 'https://smytten-image.gumlet.io/discover_product/1693549715_1692163522_cetaphil.avif',
        amazonUrl: 'https://amzn.to/45HEgkm'
      },
      {
        name: 'Neutrogena Hydro Boost Hyaluronic Acid Face Moisturizer',
        description: 'A lightweight, water-gel moisturizer formulated with hyaluronic acid to help replenish and lock in hydration. Designed for everyday use, it delivers a fresh, breathable feel without heaviness or greasiness.',
        reason: '	•	Powered by hyaluronic acid, known for helping the skin retain moisture and stay hydrated •	Lightweight water-gel texture absorbs quickly and feels comfortable on the skin•	Oil-free and non-greasy, making it suitable for daily use and humid climates',
        category: 'Skincare',
        image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/1826371-Neutrogena-Hydro-Boost-Water-Gel-Review-1296x728-Header-c0dcdf.jpg?w=1575',
      amazonUrl: 'https://amzn.to/3LRLsDL'
      },
      {
        name: 'La Roche-Posay Anthelios Sunscreen UVMune 400 Oil Control Gel Cream SPF50+',
        description: 'Matte finish Invisible Sunscreen for Oily, Blemish & Acne-Prone',
        reason: '	•	Broad-spectrum SPF 50+ protection helps shield the skin from both UVA and UVB rays •	Powered by Mexoryl 400, an advanced UV filter developed to improve protection against long UVA rays•	Gel-cream texture absorbs quickly without leaving a sticky or heavy residue',
        category: 'Skincare',
        image: 'https://m.media-amazon.com/images/I/51WC+UB8NFL._SX522_.jpg',
        amazonUrl: 'https://amzn.to/4c77Ovw'
      },
      {
        name: 'Beardo Beard Growth Duo | Beard & Hair Growth Oil',
        description: 'A grooming tool and care solution designed to support healthier-looking beard growth and improve the appearance of patchy or uneven areas when used consistently as part of a beard-care routine.',
        reason: 'Supports fuller-looking beard growth by stimulating the skin and hair follicles. Helps reduce the appearance of patchiness by encouraging more even growth over time',
        category: 'Grooming',
        image: 'https://beardo.in/cdn/shop/files/1_db396662-b60a-4480-a6e3-e1daaeb9d35f.jpg?v=1762752447&width=1946',
        amazonUrl: 'https://amzn.to/4roawB7'
      }
    ],
    wellness: [
      {
        name: 'Neuherbs Omega-3 Fish Oil Capsules',
        description: 'High-quality omega-3 supplement supporting heart and brain health.',
        reason: 'Sourced from deep-sea fish with good EPA/DHA ratio. Important for those who don\'t consume enough fatty fish in their diet.',
        category: 'Supplements',
        image: 'https://m.media-amazon.com/images/I/716XShje6tL._SX679_.jpg',
        amazonUrl: 'https://amzn.to/4kl077i'

      },
      {
        name: 'Himalaya Ashwagandha Tablets',
        description: 'Traditional Ayurvedic adaptogen for stress management and overall wellness.',
        reason: 'Well-established brand with quality control. Ashwagandha is backed by research for stress reduction and energy support.',
        category: 'Supplements',
        image: 'https://m.media-amazon.com/images/I/81GL5NJov3L._SX679_.jpg',
        amazonUrl: 'https://amzn.to/4rsGaxq'
      },
      {
        name: 'Carbamide Forte Vitamin D3 K2 Supplement',
        description: 'Essential Vitamin K2 MK7 To Support Bone & Heart Health',
        reason: ' These Vitamins D supplements combine Vitamin D3, Vitamin K2 MK7, and K2 D3 vitamin supplement synergy to help calcium reach the bones instead of arteries.',
        category: 'Supplements',
        image: 'https://m.media-amazon.com/images/I/71bQqgqf2oL._SX679_.jpg',
        amazonUrl: 'https://amzn.to/46jpsZf'
      },
      {
        name: 'Organic India Tulsi Green Tea',
        description: 'Caffeine-free herbal tea combining tulsi with green tea benefits.',
        reason: 'Great for daily wellness routine. Tulsi is traditionally used for stress relief and overall vitality.',
        category: 'Wellness',
        image: 'https://images.unsplash.com/photo-1566373104181-133b57c9fd98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc2OTk4MTA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        amazonUrl: 'https://amzn.to/4qPO6Je'
      }
    ],
    style: [
      {
        name: 'Nike Revolution Running Shoes',
        description: 'Comfortable, versatile running shoes suitable for daily wear and light exercise.',
        reason: 'Good cushioning and support for everyday activities. Durable construction and widely available in India.',
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1632668701778-24798acadfa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        amazonUrl: 'https://amzn.to/4a9WMTz'
      },
      {
        name: 'Adidas Ultraboost Sneakers',
        description: 'Premium comfort sneakers with responsive cushioning technology.',
        reason: 'Exceptional comfort for all-day wear. Stylish enough for casual outings while providing excellent foot support.',
        category: 'Footwear',
        image: 'https://plus.unsplash.com/premium_photo-1663127271784-0078c24adfab?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        amazonUrl: 'https://amzn.to/3ZOYC7C'
      },
      {
        name: 'Bata Comfit Men Slip-on Sneaker',
        description: 'Affordable, comfortable everyday shoes for work and casual occasions.',
        reason: 'Reliable Indian brand with good value for money. Comfortable for long hours of wear.',
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1616663308968-58162d332720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBsZWF0aGVyJTIwc2hvZXMlMjBicm93bnxlbnwxfHx8fDE3Njk5ODEwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        amazonUrl: 'https://amzn.to/4bzzyZw'
      },
      {
        name: 'Wildcraft Nylon 44 Ltrs Casual Backpack',
        description: 'Durable, ergonomic backpack for daily commute and travel.',
        reason: 'Well-designed with good organization pockets. Comfortable for daily use and built to last.',
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1760909148912-1f3f45ab3f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHRyYXZlbCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzY5OTgxMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
         amazonUrl: 'https://amzn.to/3Mc9TM5'
      }
    ],
    books: [
      {
        name: 'Atomic Habits by James Clear',
        description: 'Practical guide to building good habits and breaking bad ones through small changes.',
        reason: 'One of the most practical books on habit formation. Clear, actionable advice backed by research.',
        category: 'Personal Growth',
        image: 'https://images.unsplash.com/photo-1598301257942-e6bde1d2149b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdG9taWMlMjBoYWJpdHMlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY5OTgxMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        amazonUrl: 'https://amzn.to/4c2RsnG'
      },
      {
        name: 'The Psychology of Money by Morgan Housel',
        description: 'Timeless lessons on wealth, greed, and happiness through the lens of psychology.',
        reason: 'Excellent for understanding financial behavior and decision-making. Relevant for all income levels.',
        category: 'Personal Finance',
        image: 'https://images.unsplash.com/photo-1565514417878-a66a6b0f2c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGZpbmFuY2UlMjBib29rfGVufDF8fHx8MTc2OTk4MTA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        amazonUrl: 'https://amzn.to/4aahUt7'
      },
      {
        name: 'Deep Work by Cal Newport',
        description: 'Rules for focused success in a distracted world.',
        reason: 'Essential read for improving productivity and concentration. Particularly relevant in our digital age.',
        category: 'Productivity',
        image: 'https://images.unsplash.com/photo-1711185895262-f14ad4d4eeac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        amazonUrl: 'https://amzn.to/3M40shS'
      },
      {
        name: 'The 5 AM Club by Robin Sharma',
        description: 'Guide to owning your morning and elevating your life through early rising routines.',
        reason: 'Practical framework for morning routines. Helpful for those looking to optimize their daily schedule.',
        category: 'Personal Growth',
        image: 'https://images.unsplash.com/photo-1613926161474-fcc7a939e051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGdyb3d0aCUyMGJvb2tzJTIwc3RhY2t8ZW58MXx8fHwxNzY5OTgxMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        amazonUrl: 'https://amzn.to/4rt2irs'
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
                    href= {product.amazonUrl}
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
                    href={product.amazonUrl}
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
                    href={product.amazonUrl}
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
                    href={product.amazonUrl}
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
