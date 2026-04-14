import React from 'react';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';

export function About() {
  return (
    <div className="bg-[var(--color-support)]">
      {/* Hero */}
      <section className="bg-[var(--color-surface)] border-b border-gray-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Authentic Off Stamp Vapes</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are your trusted worldwide supplier for genuine Off Stamp disposable vapes, pods, and kits. Quality, flavor, and reliability delivered globally.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-gray-800 bg-[var(--color-surface-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-[var(--color-primary)] mb-2">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Authentic</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-[var(--color-primary)] mb-2">24h</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Dispatch Time</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-[var(--color-primary)] mb-2">50k+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-[var(--color-primary)] mb-2">Global</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Worldwide Shipping</div>
            </div>
          </div>
        </div>
      </section>

      {/* Scam Warning Section */}
      <section className="py-24 bg-[var(--color-support)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-12 shadow-xl border border-red-900/30">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-900/20 p-4 rounded-full text-[var(--color-primary)]">
                <AlertTriangle size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold text-white">Beware of Counterfeits</h2>
                <p className="text-[var(--color-primary)] font-medium">The vape market has many fake products. Protect yourself.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[var(--color-surface-light)] p-6 rounded-2xl border border-gray-800">
                <h3 className="font-bold text-lg mb-2 text-white">Fake Websites</h3>
                <p className="text-gray-400 text-sm">Always verify you are on our official domain offstamp-vape.store. Scammers often use slight misspellings.</p>
              </div>
              <div className="bg-[var(--color-surface-light)] p-6 rounded-2xl border border-gray-800">
                <h3 className="font-bold text-lg mb-2 text-white">Social Media Scams</h3>
                <p className="text-gray-400 text-sm">We do not sell directly through Instagram or Telegram DMs. All orders must go through our official checkout.</p>
              </div>
              <div className="bg-[var(--color-surface-light)] p-6 rounded-2xl border border-gray-800">
                <h3 className="font-bold text-lg mb-2 text-white">"Too Good to Be True"</h3>
                <p className="text-gray-400 text-sm">If a price is drastically lower than market average, it is likely a counterfeit device with unsafe materials.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-2xl border border-gray-800">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <Shield className="text-[var(--color-primary)]" /> How to Verify Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[var(--color-primary)] shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Every product comes with a verifiable QR code from the manufacturer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[var(--color-primary)] shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Contact our support team via our official WhatsApp number only.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[var(--color-primary)] shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Look for our secure packaging and proper sealing on delivery.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
