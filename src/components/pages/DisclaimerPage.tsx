export function DisclaimerPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#F5F1E8] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl tracking-tight text-[#2D3748] mb-4">Disclaimer</h1>
          <p className="text-lg text-[#6B7280]">Important information about our content</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">General Information</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                The content on Themora Daily (themoradaily.in) is provided for general informational
                and educational purposes only. While we strive to provide accurate, helpful, and
                well-researched information, it should not be considered professional advice.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                All recommendations, articles, and product suggestions are based on research, user
                reviews, and general experience. Individual results and experiences may vary.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Not Medical or Health Advice</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                <strong className="text-[#2D3748]">Important:</strong> We are not medical professionals,
                dermatologists, nutritionists, or licensed healthcare providers. Nothing on this website
                should be interpreted as medical advice, diagnosis, or treatment recommendations.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Content related to:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>Skincare products and routines</li>
                <li>Wellness supplements and vitamins</li>
                <li>Health and wellness practices</li>
                <li>Dietary suggestions or nutrition</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed">
                ...is for informational purposes only. Always consult qualified healthcare professionals,
                dermatologists, or licensed practitioners before:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>Starting any new supplement regimen</li>
                <li>Addressing skin conditions or concerns</li>
                <li>Making changes to your health routine</li>
                <li>Treating any medical condition</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Product Recommendations</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Our product recommendations are based on research, user reviews, and general consensus.
                However:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>Individual experiences with products may vary</li>
                <li>What works for one person may not work for another</li>
                <li>Skin types, body chemistry, and personal preferences differ</li>
                <li>We cannot guarantee specific results from any product</li>
                <li>We are not responsible for adverse reactions or dissatisfaction with products</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed">
                Always read product labels, check ingredients for potential allergens, and perform
                patch tests when trying new skincare or grooming products.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Affiliate Relationships</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Some links on this website are affiliate links (primarily Amazon Associates). We may
                earn a commission when you make purchases through these links. This does not affect
                your purchase price. See our{' '}
                <a href="/affiliate-disclosure" className="text-[#9CAF88] hover:underline">
                  Affiliate Disclosure
                </a>{' '}
                for complete details.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Accuracy of Information</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                While we make every effort to provide accurate and current information:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>Product formulations, prices, and availability may change without notice</li>
                <li>Scientific understanding of ingredients and practices evolves over time</li>
                <li>Information may become outdated despite our efforts to maintain accuracy</li>
                <li>We do not guarantee the completeness or accuracy of all content</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed">
                Always verify critical information independently and check current product details
                before making purchase decisions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Third-Party Links and Content</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Our website contains links to third-party websites (including Amazon). We are not
                responsible for the content, accuracy, privacy practices, or policies of these external
                sites. Clicking on third-party links is at your own risk.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">No Guarantees or Warranties</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                The content on Themora Daily is provided "as is" without warranties of any kind, either
                express or implied. We make no guarantees about:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>The accuracy, completeness, or reliability of content</li>
                <li>The effectiveness of recommended products or practices</li>
                <li>Specific outcomes or results from following our suggestions</li>
                <li>Uninterrupted or error-free website access</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Personal Responsibility</h2>
              <p className="text-[#6B7280] leading-relaxed">
                You are responsible for your own decisions and actions. Use of information from this
                website is at your own risk. We encourage you to:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>Do your own research before making purchases</li>
                <li>Consult professionals for health, skin, or medical concerns</li>
                <li>Read product reviews and check ingredients independently</li>
                <li>Make informed decisions based on your personal circumstances</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Limitation of Liability</h2>
              <p className="text-[#6B7280] leading-relaxed">
                To the fullest extent permitted by law, Themora Daily and its operators shall not be
                liable for any damages arising from the use of this website or reliance on its content.
                This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Changes to This Disclaimer</h2>
              <p className="text-[#6B7280] leading-relaxed">
                We may update this disclaimer from time to time. Changes will be posted on this page.
                Continued use of the website after changes constitutes acceptance of the updated disclaimer.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Contact Us</h2>
              <p className="text-[#6B7280] leading-relaxed">
                If you have questions about this disclaimer, please contact us at:
                <br />
                <a href="mailto:contact@themoradaily.in" className="text-[#9CAF88] hover:underline">
                  contact@themoradaily.in
                </a>
              </p>
            </div>

            <div className="bg-[#FAF9F7] border border-[#E5E1D8] p-6 rounded-lg">
              <h3 className="text-xl text-[#2D3748] mb-3">In Summary</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Our content is for informational purposes only. We are not medical professionals. Always
                consult qualified experts for health, skin, or medical advice. Individual experiences
                with products vary. Make informed decisions based on professional guidance and personal research.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
