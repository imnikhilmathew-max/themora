export function AffiliateDisclosurePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#F5F1E8] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl tracking-tight text-[#2D3748] mb-4">Affiliate Disclosure</h1>
          <p className="text-lg text-[#6B7280]">Transparency is important to us</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Amazon Associates Program</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Themora Daily is a participant in the Amazon Services LLC Associates Program and the
                Amazon.in Associates Program, affiliate advertising programs designed to provide a means
                for sites to earn advertising fees by advertising and linking to Amazon.com and Amazon.in.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                This means that when you click on certain links on our website and make a purchase on
                Amazon, we may earn a small commission at no additional cost to you. The price you pay
                remains exactly the same whether you use our affiliate link or not.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">How Affiliate Links Work</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                When you visit our website and click on a product link that directs you to Amazon:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>You are redirected to Amazon's website</li>
                <li>Amazon uses cookies to track your session</li>
                <li>If you make a purchase during that session, we receive a small commission</li>
                <li>This commission comes from Amazon, not from you</li>
                <li>Your purchase price is not affected</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed">
                This commission helps us maintain the website, research products, and continue providing
                helpful content to our readers.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Our Commitment to Honest Recommendations</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                While we do earn commissions from affiliate links, this does not influence our recommendations.
                We are committed to the following principles:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>We only recommend products we genuinely believe are valuable</li>
                <li>Our recommendations are based on research, user reviews, and real-world experience</li>
                <li>We provide honest assessments of both strengths and limitations</li>
                <li>We do not create fake reviews or exaggerate product benefits</li>
                <li>We do not recommend products solely because they offer higher commissions</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed">
                Our goal is to help you make informed decisions, not to maximize affiliate revenue at
                the expense of your trust.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Editorial Independence</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Our editorial content is created independently and is not influenced by affiliate
                partnerships. Product recommendations are made based on their merit, not on commission rates.
                We maintain a clear separation between informational content and affiliate recommendations.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Your Choice</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Using our affiliate links is entirely optional. If you prefer, you can:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>Navigate directly to Amazon without using our links</li>
                <li>Search for products independently</li>
                <li>Purchase from other retailers</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed">
                We appreciate when you use our affiliate links, as it helps support our work, but we
                understand if you choose not to. Our content and recommendations remain free and accessible
                regardless.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Price and Availability</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Please note that product prices, availability, and specifications on Amazon may change
                at any time. While we strive to keep information current, we cannot guarantee that all
                details are always up to date. Always check Amazon for the most current information
                before making a purchase.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Other Affiliate Programs</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Currently, we only participate in the Amazon Associates Program. If we join additional
                affiliate programs in the future, we will update this disclosure accordingly.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Questions About Affiliate Relationships</h2>
              <p className="text-[#6B7280] leading-relaxed">
                If you have questions about our affiliate relationships or this disclosure, please
                contact us at:
                <br />
                <a href="mailto:contact@themoradaily.in" className="text-[#9CAF88] hover:underline">
                  contact@themoradaily.in
                </a>
              </p>
            </div>

            <div className="bg-[#F5F1E8] p-6 rounded-lg">
              <h3 className="text-xl text-[#2D3748] mb-3">Summary</h3>
              <p className="text-[#6B7280] leading-relaxed">
                We earn commissions from Amazon when you purchase through our affiliate links, but this
                doesn't cost you anything extra. Our recommendations are always honest and independent.
                We only recommend products we genuinely believe in. Thank you for supporting Themora Daily.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
