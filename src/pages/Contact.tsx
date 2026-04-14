import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, ShieldAlert } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-[var(--color-support)] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Contact & Support</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Our team is available to assist with orders, tracking, and general inquiries.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <div className="bg-[var(--color-surface)] rounded-3xl p-8 shadow-sm border-l-4 border-[#25D366]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-900/20 p-4 rounded-full text-[#25D366]">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-white">WhatsApp Support</h2>
                  <p className="text-gray-500">Fastest response time</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                For order placement, tracking updates, and quick questions, reach out on our secure WhatsApp line.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/18437320661', '_blank')}
                className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Message Us Now
              </button>
              
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="font-medium text-sm text-gray-300 mb-3">Response Times:</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between"><span>Mon-Fri (9am - 6pm EST):</span> <span className="font-medium text-[#25D366]">&lt; 15 mins</span></div>
                  <div className="flex justify-between"><span>Weekends:</span> <span>Within 2 hours</span></div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[var(--color-surface)] rounded-3xl p-8 shadow-sm border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[var(--color-primary)]/10 p-4 rounded-full text-[var(--color-primary)]">
                  <Mail size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-white">Email</h2>
                  <p className="text-gray-500">For detailed inquiries</p>
                </div>
              </div>
              <a href="mailto:sales@offstamp-vape.store" className="text-lg font-medium text-[var(--color-primary)] hover:underline block mb-6">
                sales@offstamp-vape.store
              </a>
              <button 
                onClick={() => window.location.href = 'mailto:sales@offstamp-vape.store'}
                className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </button>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            {/* Storefront Banner */}
            <div className="bg-green-900/20 border border-green-900/50 rounded-2xl p-6 flex items-start gap-4 text-green-400">
              <ShieldAlert className="shrink-0 mt-1 text-green-500" size={24} />
              <div>
                <h3 className="font-bold mb-1 text-green-300">Physical Storefront & Online</h3>
                <p className="text-sm">We operate both a physical storefront and a comprehensive online shop. Whether you prefer to shop in-person or from the comfort of your home, we provide the same premium service and authentic Off Stamp products across all channels.</p>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-[var(--color-surface)] rounded-3xl p-8 shadow-sm border border-gray-800">
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2 text-white">
                <Clock className="text-[var(--color-primary)]" /> Shipping & Delivery
              </h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3 pb-4 border-b border-gray-800">
                  <div className="font-medium text-gray-300 w-24">Processing</div>
                  <div>Orders processed within 24 hours</div>
                </div>
                <div className="flex items-start gap-3 pb-4 border-b border-gray-800">
                  <div className="font-medium text-gray-300 w-24">Carriers</div>
                  <div>UPS, FedEx, and USPS</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="font-medium text-gray-300 w-24">Coverage</div>
                  <div>Worldwide International Shipping</div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[var(--color-surface)] rounded-3xl p-8 shadow-sm border border-gray-800">
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2 text-white">
                <MapPin className="text-[var(--color-primary)]" /> Operating Regions
              </h3>
              <p className="text-gray-400 mb-4">We proudly ship from our facilities to customers in:</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-800 px-4 py-2 rounded-lg font-medium text-gray-300">United States</span>
                <span className="bg-gray-800 px-4 py-2 rounded-lg font-medium text-gray-300">United Kingdom</span>
                <span className="bg-gray-800 px-4 py-2 rounded-lg font-medium text-gray-300">Europe</span>
                <span className="bg-gray-800 px-4 py-2 rounded-lg font-medium text-gray-300">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
