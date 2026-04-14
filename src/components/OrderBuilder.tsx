import React, { useState } from 'react';
import { X, Trash2, Send, Mail, CreditCard, Bitcoin, Smartphone, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function OrderBuilder() {
  const { items, removeItem, updateQuantity, clearOrder, isOrderBuilderOpen, setOrderBuilderOpen } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'apple' | 'chime' | 'crypto'>('apple');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express' | 'international' | 'overnight'>('standard');
  const [status, setStatus] = useState<{ type: 'error' | 'success', message: string } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const shippingRates = {
    standard: { name: 'Standard (5 days)', price: 9.90 },
    express: { name: 'Express (2-3 days)', price: 20.00 },
    international: { name: 'International Shipping', price: 60.00 },
    overnight: { name: 'Overnight (24 hours)', price: 80.00 }
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shippingPrice = shippingRates[shippingMethod].price;
  const total = subtotal + shippingPrice;
  const MIN_ORDER_AMOUNT = 100;
  const isBelowMinimum = total < MIN_ORDER_AMOUNT;

  const generateOrderText = () => {
    let message = `New Order from ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Delivery Address: ${formData.address}\n`;
    message += `Shipping Method: ${shippingRates[shippingMethod].name} ($${shippingPrice.toFixed(2)})\n`;
    message += `Payment Method: ${paymentMethod.toUpperCase()}\n\n`;
    message += `Items:\n`;
    items.forEach(item => {
      message += `- ${item.qty}x ${item.name} ${item.variant && item.variant !== 'default' ? `(${item.variant})` : ''} - $${(item.price * item.qty).toFixed(2)}\n`;
    });
    message += `\nSubtotal: $${subtotal.toFixed(2)}`;
    message += `\nShipping: $${shippingPrice.toFixed(2)}`;
    message += `\nTotal: $${total.toFixed(2)}`;
    return message;
  };

  const handleWhatsAppOrder = () => {
    if (isBelowMinimum) {
      setStatus({ type: 'error', message: `Minimum order amount is $${MIN_ORDER_AMOUNT.toFixed(2)} (including shipping).` });
      return;
    }
    if (!formData.name || !formData.email || !formData.address) {
      setStatus({ type: 'error', message: "Please fill in all required fields (Name, Email, Address)" });
      return;
    }
    const phoneNumber = "18437320661";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(generateOrderText())}`, '_blank');
  };

  const handleEmailOrder = () => {
    if (isBelowMinimum) {
      setStatus({ type: 'error', message: `Minimum order amount is $${MIN_ORDER_AMOUNT.toFixed(2)} (including shipping).` });
      return;
    }
    if (!formData.name || !formData.email || !formData.address) {
      setStatus({ type: 'error', message: "Please fill in all required fields (Name, Email, Address)" });
      return;
    }
    
    const subject = encodeURIComponent(`New Order from ${formData.name}`);
    const body = encodeURIComponent(generateOrderText());
    window.location.href = `mailto:sales@offstamp-vapes.com?subject=${subject}&body=${body}`;
    
    setStatus({ type: 'success', message: "Your email client has been opened. Please send the email to complete your order." });
    
    setTimeout(() => {
      clearOrder();
      setOrderBuilderOpen(false);
      setStatus(null);
    }, 3000);
  };

  if (!isOrderBuilderOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setOrderBuilderOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="relative w-full max-w-lg bg-[var(--color-surface)] text-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="font-heading font-bold text-xl">Your Order</h2>
          <button 
            onClick={() => setOrderBuilderOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                <Trash2 size={24} className="text-gray-400" />
              </div>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Order Form */}
              <div className="pt-6 pb-6 px-4 bg-gray-800/40 rounded-2xl border border-gray-700/50 space-y-5">
                <h3 className="font-heading font-bold text-lg border-b border-gray-700 pb-2">Delivery Details</h3>
                
                {status && (
                  <div className={`p-3 rounded-lg text-sm ${status.type === 'error' ? 'bg-red-900/20 text-red-400 border border-red-900/50' : 'bg-green-900/20 text-green-400 border border-green-900/50'}`}>
                    {status.message}
                  </div>
                )}

                <input 
                  type="text" placeholder="Full Name *" required
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]"
                />
                <input 
                  type="email" placeholder="Email Address *" required
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]"
                />
                <input 
                  type="tel" placeholder="Phone Number"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]"
                />
                <textarea 
                  placeholder="Full Delivery Address *" required rows={3}
                  value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] resize-none"
                />
              </div>

              {/* Items List */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-lg border-b border-gray-800 pb-2">Your Items</h3>
                {items.map((item) => (
                  <div key={item.key} className="flex gap-4 items-start border-b border-gray-800 pb-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-200">{item.name}</h4>
                      {item.variant && item.variant !== 'default' && <p className="text-sm text-gray-400">{item.variant}</p>}
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-medium text-[var(--color-primary)]">${item.price.toFixed(2)}</span>
                        <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-1 border border-gray-700">
                          <button 
                            onClick={() => updateQuantity(item.key, item.qty - 1)}
                            className="p-1 hover:text-[var(--color-primary)] transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold min-w-[20px] text-center">{item.qty}</span>
                          <button 
                            onClick={() => updateQuantity(item.key, item.qty + 1)}
                            className="p-1 hover:text-[var(--color-primary)] transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.key)}
                      className="text-gray-500 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Shipping Options */}
              <div className="pt-4 space-y-4">
                <h3 className="font-heading font-bold text-lg border-b border-gray-800 pb-2">Shipping Method</h3>
                <div className="space-y-2">
                  {Object.entries(shippingRates).map(([key, method]) => (
                    <button
                      key={key}
                      onClick={() => setShippingMethod(key as any)}
                      className={`w-full flex justify-between items-center p-3 rounded-lg border transition-all ${shippingMethod === key ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-white' : 'border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                    >
                      <span className="text-sm font-medium">{method.name}</span>
                      <span className="text-sm font-bold">${method.price.toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Options */}
              <div className="pt-4 space-y-4">
                <h3 className="font-heading font-bold text-lg border-b border-gray-800 pb-2">Payment Method</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setPaymentMethod('apple')}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border ${paymentMethod === 'apple' ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                  >
                    <Smartphone size={24} className="mb-1" />
                    <span className="text-xs font-medium">Apple Cash</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('chime')}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border ${paymentMethod === 'chime' ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                  >
                    <CreditCard size={24} className="mb-1" />
                    <span className="text-xs font-medium">Chime</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('crypto')}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border ${paymentMethod === 'crypto' ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                  >
                    <Bitcoin size={24} className="mb-1" />
                    <span className="text-xs font-medium">Crypto</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Note: Payment details for your selected method will be emailed to you once we receive your order request.
                </p>
              </div>

            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-[var(--color-surface-light)] border-t border-gray-800">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Shipping ({shippingRates[shippingMethod].name})</span>
                <span className="text-white">${shippingPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                <span className="font-medium text-gray-300">Total</span>
                <span className="font-heading font-bold text-2xl text-[var(--color-primary)]">${total.toFixed(2)}</span>
              </div>
              {isBelowMinimum && (
                <div className="mt-2 p-2 bg-red-900/20 border border-red-900/50 rounded-lg text-red-400 text-[10px] leading-tight">
                  Minimum order amount of $100.00 (subtotal + shipping) is required.
                </div>
              )}
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={handleEmailOrder}
                disabled={isBelowMinimum}
                className={`flex-1 bg-[var(--color-primary)] text-white py-2.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm ${isBelowMinimum ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:bg-opacity-90'}`}
              >
                <Mail size={16} />
                Email
              </button>
              <button 
                onClick={handleWhatsAppOrder}
                disabled={isBelowMinimum}
                className={`flex-1 bg-[#25D366] text-white py-2.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm ${isBelowMinimum ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:bg-opacity-90'}`}
              >
                <Send size={16} />
                WhatsApp
              </button>
              <button 
                onClick={clearOrder}
                className="p-2.5 bg-transparent text-gray-400 border border-gray-700 rounded-xl font-medium hover:bg-gray-800 transition-all"
                title="Clear Order"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
