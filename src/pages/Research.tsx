import React from 'react';
import { BookOpen, Search, BarChart3, Globe } from 'lucide-react';

export function Research() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-support)] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6">
                <BookOpen size={16} /> Industry Insights & Research
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Vaping <span className="text-[var(--color-primary)]">Research</span> & Innovation
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Explore the latest studies, market trends, and technological advancements in the disposable vape industry. We stay ahead so you get the best.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-secondary)] to-[var(--color-primary)] rounded-3xl opacity-20 blur-3xl" />
              <img 
                src="https://mipod.com/cdn/shop/files/Off-Stamp_X-Cube_Florida-Sherbet_Kit-Pod_600x600_b9af3a8d-52bc-4a9e-a364-2064d3810f96.png" 
                alt="Off Stamp X-Cube Florida Twist Kit" 
                className="rounded-3xl shadow-2xl relative z-10 object-contain w-full h-[500px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Topics */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-surface-light)] p-8 rounded-3xl border border-gray-800">
              <Search className="text-[var(--color-primary)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-white">Flavor Science</h3>
              <p className="text-gray-400">Deep dive into how we develop our signature flavor profiles using premium ingredients and advanced mesh coil technology.</p>
            </div>
            <div className="bg-[var(--color-surface-light)] p-8 rounded-3xl border border-gray-800">
              <BarChart3 className="text-[var(--color-secondary)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-white">Market Trends</h3>
              <p className="text-gray-400">Analysis of the shift towards high-puff count disposables and rechargeable pod systems in the US market.</p>
            </div>
            <div className="bg-[var(--color-surface-light)] p-8 rounded-3xl border border-gray-800">
              <Globe className="text-[var(--color-accent)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-white">Safety Standards</h3>
              <p className="text-gray-400">Our commitment to manufacturing excellence and adherence to the highest safety protocols in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-24 bg-[var(--color-support)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gray-800">
            <h2 className="text-3xl font-heading font-bold mb-6 text-white text-center">Latest Whitepapers</h2>
            <div className="space-y-4">
              {[
                "The Evolution of Mesh Coil Technology (2024)",
                "Battery Efficiency in High-Capacity Disposables",
                "Consumer Flavor Preferences: A 5-Year Study",
                "Sustainable Vaping: The Future of Rechargeable Pods"
              ].map((paper, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer border border-gray-700">
                  <span className="text-white font-medium">{paper}</span>
                  <span className="text-[var(--color-primary)] text-sm">Download PDF &darr;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
