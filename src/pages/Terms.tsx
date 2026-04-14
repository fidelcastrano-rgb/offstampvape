import React from 'react';

export function Terms() {
  return (
    <div className="bg-[var(--color-support)] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Terms of Use</h1>
        
        <div className="prose prose-invert max-w-none text-gray-400 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Age Restriction</h2>
            <p>
              You must be at least 21 years of age to purchase products from this website. By using this site, you represent that you are at least 21 years old. We use third-party age verification services to confirm your age.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Product Use</h2>
            <p>
              The products sold on this site are intended for adult use only. Nicotine is an addictive chemical. Use these products at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>
              All content on this site, including text, graphics, logos, and images, is the property of Off Stamp Vape and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>
              Off Stamp Vape shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
