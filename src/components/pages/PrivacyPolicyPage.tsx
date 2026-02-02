export function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#F5F1E8] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl tracking-tight text-[#2D3748] mb-4">Privacy Policy</h1>
          <p className="text-lg text-[#6B7280]">Last updated: February 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Introduction</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Themora Daily ("we," "our," or "us") operates the website themoradaily.in. This Privacy
                Policy explains how we collect, use, and protect information when you visit our website.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                We are committed to protecting your privacy and handling your information with transparency and care.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Information We Collect</h2>
              <h3 className="text-xl text-[#2D3748] mb-3">Analytics Data</h3>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                We collect basic analytics data to understand how visitors use our website, including:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li>Pages visited and time spent on pages</li>
                <li>Device type and browser information</li>
                <li>General location (country/region level, not precise)</li>
                <li>Referral source (how you arrived at our site)</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed">
                This information is collected in aggregate form and does not personally identify you.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Cookies</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Our website uses cookies to improve your browsing experience and track website analytics.
                Cookies are small text files stored on your device.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                <strong className="text-[#2D3748]">Types of cookies we use:</strong>
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4 space-y-2">
                <li><strong className="text-[#2D3748]">Essential cookies:</strong> Required for website functionality</li>
                <li><strong className="text-[#2D3748]">Analytics cookies:</strong> Help us understand site usage</li>
                <li><strong className="text-[#2D3748]">Affiliate cookies:</strong> Track referrals to Amazon (see below)</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed">
                You can control cookies through your browser settings. Disabling cookies may affect website functionality.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Amazon Associates Program</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                We participate in the Amazon Associates Program. When you click on Amazon links and make
                purchases, Amazon may use cookies to track the referral. This helps us earn a small
                commission at no extra cost to you.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Amazon's use of cookies is governed by their own privacy policy. We recommend reviewing
                Amazon's privacy policy for details on how they handle your information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Contact Form Data</h2>
              <p className="text-[#6B7280] leading-relaxed">
                If you contact us through our contact form, we collect the information you provide (such
                as your name and email address) solely to respond to your inquiry. We do not share this
                information with third parties or use it for marketing purposes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Third-Party Links</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Our website contains links to third-party websites (primarily Amazon). We are not responsible
                for the privacy practices of these external sites. We encourage you to review their privacy
                policies before providing any personal information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Data Security</h2>
              <p className="text-[#6B7280] leading-relaxed">
                We implement reasonable security measures to protect information collected through our website.
                However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Children's Privacy</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Our website is not directed to children under 13. We do not knowingly collect personal
                information from children under 13.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Changes to This Privacy Policy</h2>
              <p className="text-[#6B7280] leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl text-[#2D3748] mb-4">Contact Us</h2>
              <p className="text-[#6B7280] leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:contact@themoradaily.in" className="text-[#9CAF88] hover:underline">
                  contact@themoradaily.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
