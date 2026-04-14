import React from 'react';

export function Privacy() {
  return (
    <div className="bg-[var(--color-support)] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none text-gray-400 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information Collection</h2>
            <p>
              We collect information from you when you register on our site, place an order, or subscribe to our newsletter. This information may include your name, email address, mailing address, phone number, and age verification data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information Use</h2>
            <p>
              Any of the information we collect from you may be used in one of the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To personalize your experience</li>
              <li>To improve our website</li>
              <li>To improve customer service</li>
              <li>To process transactions</li>
              <li>To send periodic emails</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Information Protection</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
            <p>
              We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Consent</h2>
            <p>
              By using our site, you consent to our website's privacy policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
