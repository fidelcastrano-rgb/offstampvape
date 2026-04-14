import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Truck, Zap } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ReactMarkdown from 'react-markdown';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToOrder } = useCart();

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      document.title = product.seoTitle || product.name;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', product.metaDescription || product.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = product.metaDescription || product.description;
        document.head.appendChild(meta);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[var(--color-support)] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <button onClick={() => navigate('/products')} className="text-[var(--color-primary)] hover:underline">
            Return to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToOrder({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };

  return (
    <div className="bg-[var(--color-support)] min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Catalog
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="bg-[var(--color-surface)] rounded-3xl p-8 border border-gray-800 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-md object-contain drop-shadow-2xl"
              width="500"
              height="500"
              fetchPriority="high"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <span className="text-[var(--color-primary)] font-medium tracking-wider uppercase text-sm mb-2 block">
                {product.category}
              </span>
              <h1 className="text-4xl font-heading font-bold text-white mb-4">{product.name}</h1>
              <p className="text-xl text-gray-300">{product.description}</p>
            </div>

            <div className="mb-8">
              <div className="text-3xl font-bold text-white mb-4">
                ${product.price.toFixed(2)}
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(255,77,109,0.3)]"
              >
                Add to Order
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-3 text-gray-300">
                <ShieldCheck className="text-[var(--color-primary)]" size={24} />
                <span className="text-sm">100% Authentic Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Truck className="text-[var(--color-primary)]" size={24} />
                <span className="text-sm">Fast Worldwide Shipping</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Zap className="text-[var(--color-primary)]" size={24} />
                <span className="text-sm">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Description Section */}
        {product.seoDescription && (
          <div className="bg-[var(--color-surface)] rounded-3xl p-8 lg:p-12 border border-gray-800">
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown>{product.seoDescription}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
