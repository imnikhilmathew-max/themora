import { Mail, MessageCircle, Users } from "lucide-react";
import { motion } from "motion/react";

export function ContactPage() {
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#6B7280] leading-relaxed"
          >
            We'd love to hear from you. Whether you have
            questions, feedback, or collaboration ideas, feel
            free to reach out.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Options */}
      <section className="py-12 border-b border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "General Inquiries",
                description:
                  "Questions about our recommendations, website, or content? We're here to help.",
              },
              {
                icon: Users,
                title: "Brand Collaborations",
                description:
                  "Interested in working together? Reach out to discuss potential partnerships.",
              },
              {
                icon: Mail,
                title: "Feedback",
                description:
                  "Your thoughts help us improve. Share your feedback or suggestions with us.",
              },
            ].map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="w-16 h-16 bg-[#F5F1E8] rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-8 h-8 text-[#9CAF88]" />
                  </motion.div>
                  <h3 className="text-xl text-[#2D3748] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    {option.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h3 className="text-3xl tracking-tight text-[#2D3748] mb-4">
            Reach Out Via Email
          </h3>
          <p className="text-lg text-[#6B7280] mb-8">
            For all inquiries, please contact us at:
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            href="mailto:themoradaily@gmail.com"
            className="inline-flex items-center gap-2 text-2xl text-[#9CAF88] hover:text-[#8A9E78] transition-colors"
          >
            <Mail className="w-8 h-8" />
            themoradaily@gmail.com
          </motion.a>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-[#6B7280] mt-6"
          >
            We typically respond within 24-48 hours during
            business days.
          </motion.p>
        </motion.div>
      </section>

      {/* FAQ Note */}
      <section className="bg-[#F5F1E8] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl text-[#2D3748] mb-4 text-center"
          >
            Before You Contact Us
          </motion.h3>
          <div className="space-y-4 text-[#6B7280]">
            {[
              {
                title: "Product-specific questions:",
                text: "We provide general recommendations based on research. For specific product questions, please contact the manufacturer or check Amazon product pages.",
              },
              {
                title: "Medical/health advice:",
                text: "We are not medical professionals. Please consult qualified healthcare providers for medical advice.",
              },
              {
                title: "Order or shipping issues:",
                text: "For Amazon orders, please contact Amazon customer service directly.",
              },
            ].map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <strong className="text-[#2D3748]">
                  {item.title}
                </strong>{" "}
                {item.text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}