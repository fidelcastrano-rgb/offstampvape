import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: 'Buying & Ordering',
    questions: [
      { q: 'How do I place an order?', a: 'Use our Order Builder to select your products, then click "Order via WhatsApp" or "Order via Email". This will open a pre-filled message to our secure line where we will confirm payment and shipping details.' },
      { q: 'What payment methods do you accept?', a: 'We accept Apple Cash, Chime, and select Cryptocurrencies for maximum privacy and security.' },
      { q: 'Is there a minimum order quantity?', a: 'No, there is no minimum order quantity. However, we offer free shipping on orders over $100.' }
    ]
  },
  {
    category: 'Delivery',
    questions: [
      { q: 'How long does shipping take?', a: 'All orders placed before 2PM EST are dispatched the same day. Delivery times vary by method: Standard (5 days), Express (2-3 days), and Overnight (24 hours). International shipping times vary by destination.' },
      { q: 'Do you ship internationally?', a: 'Yes! We proudly offer worldwide international shipping. We utilize reliable carriers like UPS, FedEx, and USPS to ensure your order reaches you safely, no matter where you are.' },
      { q: 'Is the packaging discreet?', a: 'Yes, all orders are shipped in plain, unbranded packaging with no indication of the contents on the outside.' }
    ]
  },
  {
    category: 'Products & Quality',
    questions: [
      { q: 'Are your products authentic?', a: 'Yes, 100%. All our Off Stamp vapes, pods, and kits are sourced directly from the manufacturer and include verifiable QR codes.' },
      { q: 'How long does a disposable vape last?', a: 'Our SW16000 series is rated for up to 16,000 puffs. Actual lifespan depends on your usage habits and puff duration.' }
    ]
  }
];

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openQ, setOpenQ] = useState<string | null>(null);

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
           q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="bg-[var(--color-support)] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-white mb-6">Frequently Asked Questions</h1>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--color-surface)] border border-gray-800 text-white shadow-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-lg placeholder-gray-500"
            />
          </div>
        </div>

        <div className="space-y-12">
          {filteredFaqs.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-heading font-bold mb-6 text-white">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((item, qIdx) => {
                  const isOpen = openQ === `${idx}-${qIdx}`;
                  return (
                    <div key={qIdx} className="bg-[var(--color-surface)] rounded-2xl shadow-sm overflow-hidden border border-gray-800">
                      <button
                        onClick={() => setOpenQ(isOpen ? null : `${idx}-${qIdx}`)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                      >
                        <span className="font-medium text-gray-200 pr-8">{item.q}</span>
                        {isOpen ? (
                          <ChevronUp className="text-[var(--color-primary)] shrink-0" size={20} />
                        ) : (
                          <ChevronDown className="text-gray-500 shrink-0" size={20} />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              No questions found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
