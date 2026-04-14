import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { CheckCircle2 } from 'lucide-react';

export function Products() {
  const { addToOrder } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-[var(--color-support)] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[var(--color-surface)] border-b border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Shop Off Stamp Vapes</h1>
          <p className="text-gray-400 max-w-2xl">Browse our collection of authentic Off Stamp disposable vapes, pods, and kits. Guaranteed quality and fast US shipping.</p>
        </div>
      </div>

      {/* Filter Bar (Sticky) */}
      <div className="sticky top-20 z-30 bg-[var(--color-support)]/80 backdrop-blur-md border-b border-gray-800 py-4 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? 'bg-[var(--color-primary)] text-white' 
                    : 'bg-[var(--color-surface)] text-gray-400 hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAdd={addToOrder} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProductCard: React.FC<{ product: any, onAdd: any }> = ({ product, onAdd }) => {
  return (
    <div className="bg-[var(--color-surface)] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-gray-700 transition-all flex flex-col border border-gray-800">
      <Link to={`/product/${product.id}`} className="block relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-900 group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          width="400"
          height="400"
        />
        <div className="absolute top-4 left-4 bg-[var(--color-support)]/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)] shadow-sm border border-gray-800">
          In Stock
        </div>
      </Link>

      <div className="text-xs font-bold text-[var(--color-secondary)] mb-2 uppercase tracking-wider">
        {product.category}
      </div>
      
      <Link to={`/product/${product.id}`} className="hover:text-[var(--color-primary)] transition-colors">
        <h3 className="font-heading font-bold text-2xl mb-2 text-white">{product.name}</h3>
      </Link>
      <p className="text-gray-400 text-sm mb-6 flex-grow">{product.description}</p>

      {/* Authenticity Strip */}
      <div className="flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-2 rounded-lg text-xs font-medium mb-6 border border-[var(--color-primary)]/20">
        <CheckCircle2 size={16} />
        100% Authentic Guaranteed
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-gray-800">
        <div>
          <div className="text-sm text-gray-400 mb-1">Price</div>
          <div className="font-heading font-bold text-2xl text-white">
            ${product.price.toFixed(2)}
          </div>
        </div>
        <button 
          onClick={() => onAdd({
            id: product.id,
            name: product.name,
            price: product.price
          })}
          className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg active:scale-95"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}
