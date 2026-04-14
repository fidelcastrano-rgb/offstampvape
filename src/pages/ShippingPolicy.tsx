import React from 'react';

export function ShippingPolicy() {
  return (
    <div className="bg-[var(--color-support)] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Shipping Policy</h1>
        
        <div className="prose prose-invert max-w-none text-gray-400 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Shipping Coverage</h2>
            <p>
              We proudly offer international shipping to customers worldwide. Whether you are in the USA, UK, Europe, or beyond, we ensure your Off Stamp products reach you safely. Please note that customers are responsible for any local customs duties or taxes that may apply in their respective countries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Processing Time</h2>
            <p>
              All orders are processed within 24 hours (excluding weekends and holidays). You will receive a notification with tracking information as soon as your order has been dispatched.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Shipping Rates & Methods</h2>
            <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-gray-800">
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span>Standard Shipping (5 days)</span>
                  <span className="font-bold text-white">$9.90</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span>Express Shipping (2-3 days)</span>
                  <span className="font-bold text-white">$20.00</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span>International Shipping</span>
                  <span className="font-bold text-white">$60.00</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Overnight (24 hours)</span>
                  <span className="font-bold text-white">$80.00</span>
                </li>
              </ul>
            </div>
            <p className="mt-4">
              We utilize reliable carriers including <strong>UPS, FedEx, and USPS</strong> to ensure the fastest and most secure delivery of your orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Minimum Order Requirement</h2>
            <p>
              To ensure efficient processing and delivery, we enforce a <strong>minimum order total of $100.00</strong>. This amount includes the subtotal of your items and the shipping fee. Orders below this threshold cannot be processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Delivery Estimates</h2>
            <p>
              Delivery times are estimates and may vary based on your location and the selected shipping method. International delivery times can vary significantly depending on local customs processing.
            </p>
            <p className="mt-4 italic">
              *Delivery times are estimates and may vary due to carrier delays or peak seasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Tracking</h2>
            <p>
              Once your order has shipped, you will receive an email with a tracking number. Please allow 24 hours for the tracking information to update.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Age Verification</h2>
            <p>
              All shipments require adult signature (21+) upon delivery. Carriers may request a valid ID to verify age.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
