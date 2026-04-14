import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-heading font-bold text-2xl tracking-tight mb-6 block">
              Off Stamp Vape<span className="text-[var(--color-primary)]">.</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              US Trusted Disposable Supplier. Providing the best Off Stamp vapes, pods, and kits directly to your door.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/products?category=SW16000 Disposable" className="hover:text-white transition-colors">SW16000 Disposables</Link></li>
              <li><Link to="/products?category=SW9000 Disposable" className="hover:text-white transition-colors">SW9000 Disposables</Link></li>
              <li><Link to="/products?category=Ice Cube Pod" className="hover:text-white transition-colors">Ice Cube Pods</Link></li>
              <li><Link to="/products?category=X-Cube Kit" className="hover:text-white transition-colors">X-Cube Kits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-xs text-gray-500">
          <p className="mb-2">
            WARNING: This product contains nicotine. Nicotine is an addictive chemical. Must be 21+ to purchase.
          </p>
          <p>&copy; {new Date().getFullYear()} Off Stamp Vape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
