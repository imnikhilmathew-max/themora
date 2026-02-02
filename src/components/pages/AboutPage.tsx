import { Target, Users, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutPage() {
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
            About Themora Daily
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#6B7280] leading-relaxed"
          >
            Helping you build better daily routines through honest, research-driven recommendations.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl tracking-tight text-[#2D3748] mb-6"
          >
            Our Story
          </motion.h2>
          <div className="space-y-6 text-lg text-[#6B7280] leading-relaxed">
            {[
              'In a world overflowing with product choices, marketing hype, and conflicting advice, we noticed something missing: a calm, honest space dedicated to helping people simplify their self-care and daily living.',
              'That\'s why we created Themora Daily.',
              'Our mission is simple: to help you build better routines by recommending products and resources that genuinely make a difference. We don\'t believe in quick fixes or miracle cures. We believe in small, consistent habits backed by research and real-world experience.',
              'Whether you\'re looking for skincare that actually works, wellness supplements supported by evidence, comfortable everyday essentials, or books that inspire growth—we\'re here to guide you with transparency and care.'
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#F5F1E8] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl tracking-tight text-[#2D3748] mb-12 text-center"
          >
            What We Stand For
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Transparency',
                description: 'We clearly disclose all affiliate relationships and never hide our business model. Honesty builds trust.'
              },
              {
                icon: Heart,
                title: 'Authenticity',
                description: 'We only recommend products we genuinely believe in. No fake reviews, no exaggerated claims.'
              },
              {
                icon: Target,
                title: 'Research-Driven',
                description: 'Our recommendations are based on research, user reviews, and evidence—not marketing hype.'
              },
              {
                icon: Users,
                title: 'Inclusivity',
                description: 'We create content for everyone—gender-neutral, accessible, and relevant to diverse lifestyles.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-8 h-8 text-[#9CAF88]" />
                  </motion.div>
                  <h3 className="text-xl text-[#2D3748] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl tracking-tight text-[#2D3748] mb-6"
          >
            What We Do
          </motion.h2>
          <div className="space-y-6 text-lg text-[#6B7280] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Themora Daily focuses on four key areas of daily life:
            </motion.p>
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="list-disc pl-6 space-y-3"
            >
              {[
                { title: 'Skincare & Grooming:', text: 'Evidence-based products for healthy skin and effective daily grooming routines.' },
                { title: 'Wellness & Supplements:', text: 'Thoughtfully selected supplements and wellness products to support your health goals.' },
                { title: 'Style Essentials:', text: 'Everyday fashion basics and comfortable footwear that fit seamlessly into modern life.' },
                { title: 'Books & Learning:', text: 'Personal growth books and resources for continuous self-improvement.' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <strong className="text-[#2D3748]">{item.title}</strong> {item.text}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              We also share practical articles in our Journal—covering topics like habit building,
              skincare routines, wellness basics, and more.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="bg-[#FAF9F7] border-t border-b border-[#E5E1D8] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl tracking-tight text-[#2D3748] mb-4">An Important Note</h3>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-4">
              While we strive to provide helpful, research-based recommendations, we are not medical
              professionals, dermatologists, or licensed healthcare providers.
            </p>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              All content on Themora Daily is for informational purposes only. Always consult qualified
              professionals for medical advice, skincare concerns, or health-related questions. Your
              well-being is important—please make informed decisions with guidance from experts when needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl tracking-tight text-[#2D3748] mb-6"
          >
            Thank You for Being Here
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#6B7280] leading-relaxed mb-8"
          >
            We're grateful you've chosen to explore Themora Daily. Whether you're just starting your
            self-care journey or looking to refine your routines, we're here to support you with
            honest recommendations and helpful insights.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[#6B7280] leading-relaxed"
          >
            Here's to better routines and a better life.
          </motion.p>
        </div>
      </section>
    </div>
  );
}