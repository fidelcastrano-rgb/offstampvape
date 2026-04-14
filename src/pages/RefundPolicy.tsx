import React from 'react';

export function RefundPolicy() {
  return (
    <div className="bg-[var(--color-support)] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Return & Refund Policy</h1>
        
        <div className="prose prose-invert max-w-none text-gray-400 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Returns</h2>
            <p>
              Due to the nature of our products and for health and safety reasons, we cannot accept returns on disposable vapes or pods once the packaging has been opened or the seal has been broken.
            </p>
            <p>
              You have 14 calendar days to return an item from the date you received it, provided it is in its original, unopened, and sealed packaging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Defective Products</h2>
            <p>
              If you receive a defective product (e.g., "dead on arrival"), please contact our support team within 48 hours of delivery. We will require a photo or video of the defect and your order number to process a replacement or credit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Refunds</h2>
            <p>
              Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
            </p>
            <p>
              If your return is approved, we will initiate a refund to your original method of payment or provide store credit, depending on your preference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Shipping Costs</h2>
            <p>
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions on how to return your item to us, contact us via our official support channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
