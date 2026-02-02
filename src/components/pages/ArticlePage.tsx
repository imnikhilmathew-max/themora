import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';

interface ProductRecommendation {
  name: string;
  reason: string;
  amazonUrl: string;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
      products?: ProductRecommendation[];
    }[];
    conclusion: string;
  };
}

const articles: Article[] = [
  {
    id: 'building-morning-routine',
    title: 'Building a Morning Routine That Actually Works',
    excerpt: 'Practical steps to create a sustainable morning routine that fits your lifestyle and goals.',
    category: 'Habits',
    readTime: '6 min read',
    date: 'January 15, 2026',
    image: 'https://images.unsplash.com/photo-1494928112383-c3e0ecad8b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwcm91dGluZSUyMGNvZmZlZSUyMHN1bnJpc2V8ZW58MXx8fHwxNzY5OTgxNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      introduction: 'We\'ve all heard the advice: "Wake up early, meditate, exercise, journal." But here\'s the truth—most morning routines fail because they\'re built around someone else\'s ideal day, not yours. A sustainable morning routine isn\'t about doing everything; it\'s about doing what matters most to you, consistently.',
      sections: [
        {
          heading: 'Start Small: The 5-Minute Rule',
          content: 'The biggest mistake people make is trying to overhaul their entire morning overnight. Instead, start with just five minutes of something meaningful. This could be stretching, reading a few pages, or simply sitting quietly with your coffee. Small wins build momentum, and momentum builds habits.'
        },
        {
          heading: 'Prioritize Your Non-Negotiables',
          content: 'What actually needs to happen every morning? For some, it\'s skincare. For others, it\'s movement or a healthy breakfast. Identify your 1-3 non-negotiables and build around those. Everything else is optional.',
          products: [
            {
              name: 'Cetaphil Gentle Skin Cleanser',
              reason: 'A quick, gentle cleanser that fits seamlessly into any morning routine—perfect for all skin types.',
              amazonUrl: 'https://www.amazon.in'
            },
            {
              name: 'Organic India Tulsi Green Tea',
              reason: 'A calming way to start your day with wellness benefits and no coffee jitters.',
              amazonUrl: 'https://www.amazon.in'
            }
          ]
        },
        {
          heading: 'Prepare the Night Before',
          content: 'Your morning routine actually starts the night before. Lay out your workout clothes, prep your breakfast ingredients, and set up your coffee maker. Removing friction makes consistency easier.'
        },
        {
          heading: 'Learn from What Works',
          content: 'If you\'re looking to build better habits around your morning routine, understanding the psychology behind habit formation can be incredibly helpful.',
          products: [
            {
              name: 'Atomic Habits by James Clear',
              reason: 'The definitive guide to building habits that stick—practical, research-backed, and easy to apply.',
              amazonUrl: 'https://www.amazon.in'
            }
          ]
        },
        {
          heading: 'Flexibility Is Key',
          content: 'Your morning routine doesn\'t have to be identical every single day. Have a "minimum viable routine" for busy or tired mornings, and a fuller version for when you have more time and energy. This prevents the all-or-nothing trap that kills consistency.'
        }
      ],
      conclusion: 'A good morning routine isn\'t about perfection—it\'s about creating a foundation that supports the rest of your day. Start small, stay consistent, and adjust as you go. Your ideal morning is the one you can actually maintain.'
    }
  },
  {
    id: 'skincare-routine-guide',
    title: 'Simple Skincare Routine for Beginners',
    excerpt: 'A no-nonsense guide to building an effective skincare routine without overwhelming complexity.',
    category: 'Skincare',
    readTime: '7 min read',
    date: 'January 10, 2026',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk5ODE3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      introduction: 'Walk into any skincare aisle and you\'ll be overwhelmed with serums, essences, toners, and treatments. But here\'s the secret: effective skincare doesn\'t have to be complicated. A simple, consistent routine with the right basics will give you better results than a bathroom full of trendy products you don\'t understand.',
      sections: [
        {
          heading: 'The Three Essential Steps',
          content: 'Every good skincare routine comes down to three core steps: cleanse, moisturize, and protect. Master these before adding anything else. Cleansing removes dirt and oil, moisturizing keeps your skin hydrated, and sunscreen protects against damage. Everything else is supplementary.',
          products: [
            {
              name: 'Cetaphil Gentle Skin Cleanser',
              reason: 'Dermatologist-recommended, pH-balanced, and gentle enough for sensitive skin—perfect for daily cleansing.',
              amazonUrl: 'https://www.amazon.in'
            },
            {
              name: 'Neutrogena Hydro Boost Water Gel',
              reason: 'Lightweight, oil-free hydration with hyaluronic acid—works well under makeup and in humid climates.',
              amazonUrl: 'https://www.amazon.in'
            },
            {
              name: 'La Roche-Posay Anthelios Sunscreen SPF 50',
              reason: 'Broad-spectrum protection without white cast—non-negotiable for daily use.',
              amazonUrl: 'https://www.amazon.in'
            }
          ]
        },
        {
          heading: 'Morning Routine',
          content: 'Keep mornings simple: cleanse, moisturize, and apply sunscreen. That\'s it. If you want to add a vitamin C serum or eye cream, do it after cleansing and before moisturizing. But don\'t feel pressured to add steps just because they\'re trending.'
        },
        {
          heading: 'Evening Routine',
          content: 'Evenings are when your skin repairs itself. Double cleanse if you wore makeup or sunscreen, then moisturize. If you want to add a treatment like retinol or AHA/BHA, introduce it slowly—once or twice a week to start—and always follow with moisturizer.'
        },
        {
          heading: 'What About All the Other Products?',
          content: 'Toners, essences, masks, and serums can be helpful, but they\'re not essential. If your basic routine is working, you can experiment with one new product at a time. Wait 2-4 weeks to see results before adding something else. This way, you\'ll know what actually works.'
        },
        {
          heading: 'Listen to Your Skin',
          content: 'Your skin will tell you what it needs. If it feels tight after cleansing, your cleanser might be too harsh. If you\'re breaking out after adding a new product, scale back. Skincare isn\'t one-size-fits-all, and that\'s okay.'
        }
      ],
      conclusion: 'Great skin doesn\'t come from expensive products or complicated routines—it comes from consistency, patience, and using what works for you. Start with the basics, be gentle, and give your skin time to adjust. Simple is often better.'
    }
  },
  {
    id: 'staying-active-daily',
    title: 'Staying Active Without Joining a Gym',
    excerpt: 'How to build movement into your daily life without expensive memberships or equipment.',
    category: 'Wellness',
    readTime: '5 min read',
    date: 'January 5, 2026',
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxraW5nJTIwZXhlcmNpc2UlMjBvdXRkb29yc3xlbnwxfHx8fDE3Njk5ODE3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      introduction: 'You don\'t need a gym membership or fancy equipment to stay active. Movement is free, accessible, and can happen anywhere. The key is building it into your day so naturally that it doesn\'t feel like a chore.',
      sections: [
        {
          heading: 'Walking Is Underrated',
          content: 'Walking is one of the most effective forms of exercise, and it costs nothing. Aim for 30 minutes a day—whether it\'s a morning walk, lunchtime stroll, or evening walk around your neighborhood. Consistency matters more than intensity.',
          products: [
            {
              name: 'Nike Revolution Running Shoes',
              reason: 'Comfortable, supportive shoes make walking enjoyable—good cushioning for daily wear and light exercise.',
              amazonUrl: 'https://www.amazon.in'
            }
          ]
        },
        {
          heading: 'Bodyweight Exercises at Home',
          content: 'Push-ups, squats, lunges, planks—these require no equipment and can be done in 15-20 minutes. You don\'t need to do an hour-long workout. Even 10 minutes of movement is better than nothing.'
        },
        {
          heading: 'Active Hobbies Count',
          content: 'Gardening, dancing, playing with kids, cleaning the house—if you\'re moving, it counts. Physical activity doesn\'t have to look like traditional exercise. Find what you enjoy and do more of it.'
        },
        {
          heading: 'Invest in Comfort',
          content: 'Good footwear makes all the difference. If your feet hurt, you won\'t want to move. Invest in one pair of quality shoes that support your daily activities.',
          products: [
            {
              name: 'Adidas Ultraboost Sneakers',
              reason: 'Premium comfort for all-day wear—responsive cushioning and stylish design.',
              amazonUrl: 'https://www.amazon.in'
            }
          ]
        },
        {
          heading: 'Make It Social',
          content: 'Walk with a friend, join a local sports group, or take a dance class. Movement is more enjoyable when it\'s social, and accountability helps with consistency.'
        }
      ],
      conclusion: 'Staying active doesn\'t require a gym—it requires intention. Move your body in ways that feel good, make it part of your routine, and remember that something is always better than nothing.'
    }
  },
  {
    id: 'focus-productivity-tips',
    title: 'How to Actually Focus in a Distracted World',
    excerpt: 'Practical strategies to improve focus and get meaningful work done despite constant distractions.',
    category: 'Productivity',
    readTime: '6 min read',
    date: 'December 28, 2025',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwZm9jdXMlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc2OTk4MTcyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      introduction: 'We live in a world designed to steal our attention. Notifications, emails, social media, news alerts—everything competes for our focus. But deep, meaningful work requires uninterrupted time. Here\'s how to protect it.',
      sections: [
        {
          heading: 'Time Blocking Works',
          content: 'Instead of reacting to whatever comes up, block specific times for focused work. Treat these blocks like unmissable meetings. During these periods, turn off notifications, close unnecessary tabs, and work on one thing at a time.'
        },
        {
          heading: 'Understand Deep Work',
          content: 'Not all work is created equal. Deep work—focused, cognitively demanding tasks—produces the most valuable output. Shallow work—emails, meetings, admin tasks—is necessary but less impactful. Prioritize deep work during your peak energy hours.',
          products: [
            {
              name: 'Deep Work by Cal Newport',
              reason: 'The essential guide to focused success in a distracted world—practical strategies backed by research.',
              amazonUrl: 'https://www.amazon.in'
            }
          ]
        },
        {
          heading: 'Environment Matters',
          content: 'Your workspace affects your focus. Remove distractions, keep your desk clean, and use tools like noise-canceling headphones or focus music if they help. Small environmental changes can have a big impact.'
        },
        {
          heading: 'The Two-Minute Rule',
          content: 'If something takes less than two minutes, do it now. If it takes longer, schedule it or add it to your task list. This prevents small tasks from piling up and breaking your focus throughout the day.'
        },
        {
          heading: 'Digital Boundaries',
          content: 'Turn off non-essential notifications. Use app blockers during focus time. Set specific times to check email instead of keeping it open all day. Your attention is valuable—protect it.'
        },
        {
          heading: 'Rest and Recovery',
          content: 'Focus isn\'t infinite. You can\'t maintain deep concentration for 8 hours straight. Build in breaks, get enough sleep, and give your brain time to rest. Productivity isn\'t about working more—it\'s about working smart.'
        }
      ],
      conclusion: 'Focus is a skill, and like any skill, it improves with practice. Start with one strategy, build consistency, and gradually add more. In a world of constant distraction, the ability to focus deeply is a superpower.'
    }
  },
  {
    id: 'stress-management-basics',
    title: 'Managing Stress: What Actually Helps',
    excerpt: 'Evidence-based approaches to managing stress and building resilience in daily life.',
    category: 'Wellness',
    readTime: '6 min read',
    date: 'December 20, 2025',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcmVsYXhhdGlvbiUyMHBlYWNlfGVufDF8fHx8MTc2OTk4MTcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      introduction: 'Stress is inevitable. Work deadlines, family responsibilities, financial concerns—modern life is full of stressors. But while you can\'t eliminate stress entirely, you can change how you respond to it. Here\'s what actually helps.',
      sections: [
        {
          heading: 'Movement Reduces Stress',
          content: 'Exercise isn\'t just good for your body—it\'s one of the most effective stress relievers. Even a 20-minute walk can lower cortisol levels and improve mood. You don\'t need intense workouts; consistent movement is what matters.'
        },
        {
          heading: 'Sleep Is Non-Negotiable',
          content: 'When you\'re stressed, sleep often suffers. But poor sleep makes stress worse, creating a vicious cycle. Prioritize 7-8 hours of sleep, keep a consistent schedule, and create a calming bedtime routine.'
        },
        {
          heading: 'Adaptogens and Supplements',
          content: 'Certain supplements can support your body\'s stress response. Ashwagandha, in particular, has strong research backing its ability to reduce stress and anxiety when taken consistently.',
          products: [
            {
              name: 'Himalaya Ashwagandha Tablets',
              reason: 'Well-researched adaptogen for stress management—trusted brand with quality control.',
              amazonUrl: 'https://www.amazon.in'
            },
            {
              name: 'Neuherbs Omega-3 Fish Oil Capsules',
              reason: 'Supports brain health and mood regulation—important for stress resilience.',
              amazonUrl: 'https://www.amazon.in'
            }
          ]
        },
        {
          heading: 'Breathing Techniques',
          content: 'Deep breathing activates your parasympathetic nervous system, which calms your body\'s stress response. Try box breathing: inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat for 2-3 minutes.'
        },
        {
          heading: 'Limit Information Overload',
          content: 'Constant news consumption and social media scrolling increase stress. Set boundaries—check news once a day, limit social media time, and protect your mental space from unnecessary negativity.'
        },
        {
          heading: 'Talk About It',
          content: 'Bottling up stress makes it worse. Talk to a friend, family member, or therapist. Sometimes just saying things out loud helps you process and release tension.'
        }
      ],
      conclusion: 'Managing stress isn\'t about eliminating it—it\'s about building resilience and having tools to cope when life gets overwhelming. Start with one or two strategies, practice them consistently, and adjust as needed. You\'ve got this.'
    }
  },
  {
    id: 'smart-money-habits',
    title: 'Building Better Money Habits',
    excerpt: 'Simple, sustainable financial habits that actually work for everyday people.',
    category: 'Personal Growth',
    readTime: '7 min read',
    date: 'December 15, 2025',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMGZpbmFuY2UlMjBzYXZpbmdzfGVufDF8fHx8MTc2OTk4MTcyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      introduction: 'Financial wellness isn\'t about earning more—it\'s about managing what you have wisely. Most money advice is either too complex or unrealistic for everyday life. Here are simple habits that actually work.',
      sections: [
        {
          heading: 'Track Your Spending',
          content: 'You can\'t manage what you don\'t measure. Spend one month tracking every expense—coffee, groceries, subscriptions, everything. You\'ll be surprised where your money goes. Awareness is the first step to change.'
        },
        {
          heading: 'Automate Savings',
          content: 'The best way to save is to make it automatic. Set up a transfer from your checking to savings account right when you get paid. Even ₹500 or ₹1,000 a month adds up over time. Pay yourself first.'
        },
        {
          heading: 'Build an Emergency Fund',
          content: 'Before investing or paying off debt aggressively, build a small emergency fund—3-6 months of expenses. This buffer reduces stress and prevents you from going into debt when unexpected costs arise.'
        },
        {
          heading: 'Understand Money Psychology',
          content: 'Your relationship with money is emotional, not just logical. Understanding the psychology behind financial decisions can help you make better choices and avoid common pitfalls.',
          products: [
            {
              name: 'The Psychology of Money by Morgan Housel',
              reason: 'Timeless lessons on wealth and happiness—relevant for all income levels and life stages.',
              amazonUrl: 'https://www.amazon.in'
            }
          ]
        },
        {
          heading: 'Avoid Lifestyle Inflation',
          content: 'When your income increases, resist the urge to immediately upgrade your lifestyle. Instead, save or invest the difference. Small luxuries are fine, but don\'t let every raise disappear into higher expenses.'
        },
        {
          heading: 'Invest in Yourself',
          content: 'Books, courses, skills—investing in yourself pays the best returns. Knowledge compounds over time and opens doors that money alone can\'t.'
        }
      ],
      conclusion: 'Building wealth isn\'t about get-rich-quick schemes or complicated strategies. It\'s about consistent, smart habits practiced over time. Start small, stay disciplined, and remember that financial peace is worth more than any luxury purchase.'
    }
  }
];

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === slug);

  if (!article) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-[#2D3748] mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-[#9CAF88] hover:underline">
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#F5F1E8] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#9CAF88] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-xs text-[#9CAF88] bg-white px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-[#6B7280]">{article.readTime}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl tracking-tight text-[#2D3748] mb-4"
          >
            {article.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2 text-sm text-[#6B7280]"
          >
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden h-[400px]"
          >
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-[#2D3748] leading-relaxed mb-8 font-medium"
          >
            {article.content.introduction}
          </motion.p>

          {/* Sections */}
          {article.content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl text-[#2D3748] mb-4">{section.heading}</h2>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-4">
                {section.content}
              </p>

              {/* Product Recommendations */}
              {section.products && section.products.length > 0 && (
                <div className="bg-[#F5F1E8] rounded-lg p-6 my-6">
                  <h3 className="text-lg text-[#2D3748] mb-4">Recommended Products:</h3>
                  <div className="space-y-4">
                    {section.products.map((product, pIndex) => (
                      <motion.div
                        key={pIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                        className="border-l-4 border-[#9CAF88] pl-4"
                      >
                        <h4 className="text-[#2D3748] mb-2">{product.name}</h4>
                        <p className="text-sm text-[#6B7280] mb-3">{product.reason}</p>
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={product.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-[#9CAF88] hover:text-[#8A9E78] transition-colors"
                        >
                          View on Amazon
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF9F7] border-l-4 border-[#9CAF88] p-6 rounded-r-lg my-8"
          >
            <p className="text-lg text-[#2D3748] leading-relaxed font-medium">
              {article.content.conclusion}
            </p>
          </motion.div>

          {/* Affiliate Disclosure */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-[#E5E1D8] pt-6 mt-8"
          >
            <p className="text-sm text-[#6B7280] leading-relaxed">
              <strong>Affiliate Disclosure:</strong> This article contains affiliate links. If you
              purchase through these links, we may earn a small commission at no extra cost to you.
              We only recommend products we genuinely believe in. Read our{' '}
              <Link to="/affiliate-disclosure" className="text-[#9CAF88] hover:underline">
                full affiliate disclosure
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </article>

      {/* More Articles CTA */}
      <section className="bg-[#F5F1E8] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl text-[#2D3748] mb-4"
          >
            Explore More Articles
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/blog"
              className="inline-block bg-[#9CAF88] text-white px-6 py-3 rounded-md hover:bg-[#8A9E78] transition-colors"
            >
              Back to Journal
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
