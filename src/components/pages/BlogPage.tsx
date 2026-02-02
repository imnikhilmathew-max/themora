import { Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function BlogPage() {
  const articles = [
    {
      id: 'building-morning-routine',
      title: 'Building a Morning Routine That Actually Works',
      excerpt: 'Practical steps to create a sustainable morning routine that fits your lifestyle and goals.',
      category: 'Habits',
      readTime: '6 min read',
      date: 'January 15, 2026',
      image: 'https://images.unsplash.com/photo-1579741370245-a1bf1cf90c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwcm91dGluZSUyMGNvZmZlZSUyMGpvdXJuYWwlMjBzdW5yaXNlfGVufDF8fHx8MTc3MDA0NjQ2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'skincare-routine-guide',
      title: 'Simple Skincare Routine for Beginners',
      excerpt: 'A no-nonsense guide to building an effective skincare routine without overwhelming complexity.',
      category: 'Skincare',
      readTime: '7 min read',
      date: 'January 10, 2026',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk5ODE3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'staying-active-daily',
      title: 'Staying Active Without Joining a Gym',
      excerpt: 'How to build movement into your daily life without expensive memberships or equipment.',
      category: 'Wellness',
      readTime: '5 min read',
      date: 'January 5, 2026',
      image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxraW5nJTIwZXhlcmNpc2UlMjBvdXRkb29yc3xlbnwxfHx8fDE3Njk5ODE3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'focus-productivity-tips',
      title: 'How to Actually Focus in a Distracted World',
      excerpt: 'Practical strategies to improve focus and get meaningful work done despite constant distractions.',
      category: 'Productivity',
      readTime: '6 min read',
      date: 'December 28, 2025',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwZm9jdXMlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc2OTk4MTcyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'stress-management-basics',
      title: 'Managing Stress: What Actually Helps',
      excerpt: 'Evidence-based approaches to managing stress and building resilience in daily life.',
      category: 'Wellness',
      readTime: '6 min read',
      date: 'December 20, 2025',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcmVsYXhhdGlvbiUyMHBlYWNlfGVufDF8fHx8MTc2OTk4MTcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'smart-money-habits',
      title: 'Building Better Money Habits',
      excerpt: 'Simple, sustainable financial habits that actually work for everyday people.',
      category: 'Personal Growth',
      readTime: '7 min read',
      date: 'December 15, 2025',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMGZpbmFuY2UlMjBzYXZpbmdzfGVufDF8fHx8MTc2OTk4MTcyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

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
            The Themora Journal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#6B7280] leading-relaxed"
          >
            Practical insights on self-care, wellness, and building better daily routines.
            Information first, recommendations second.
          </motion.p>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link key={index} to={`/blog/${article.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white rounded-lg overflow-hidden border border-[#E5E1D8] hover:border-[#9CAF88] transition-colors cursor-pointer h-full"
                >
                  <motion.div 
                    className="h-56 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.span 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="text-xs text-[#9CAF88] bg-[#F5F1E8] px-3 py-1 rounded-full"
                      >
                        {article.category}
                      </motion.span>
                      <span className="text-xs text-[#6B7280]">{article.readTime}</span>
                    </div>
                    <h2 className="text-xl text-[#2D3748] mb-3 leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#F5F1E8] py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl tracking-tight text-[#2D3748] mb-4"
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#6B7280] mb-8"
          >
            We publish new articles regularly on habits, wellness, skincare, and personal growth.
            Check back often for fresh insights.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-[#6B7280]"
          >
            More articles coming soon. Follow us for updates on new content and recommendations.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
