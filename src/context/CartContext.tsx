import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  key: string; // product.id + variant.name
  id: string;
  name: string;
  variant?: string;
  price: number;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  addToOrder: (item: Omit<CartItem, 'key' | 'qty'>) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, qty: number) => void;
  clearOrder: () => void;
  isOrderBuilderOpen: boolean;
  setOrderBuilderOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOrderBuilderOpen, setOrderBuilderOpen] = useState(false);

  const addToOrder = (newItem: Omit<CartItem, 'key' | 'qty'>) => {
    const key = `${newItem.id}|${newItem.variant || 'default'}`;
    setItems(prev => {
      const existing = prev.find(i => i.key === key);
      if (existing) {
        return prev.map(i => i.key === key ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...newItem, key, qty: 1 }];
    });
    setOrderBuilderOpen(true);
  };

  const removeItem = (key: string) => {
    setItems(prev => prev.filter(i => i.key !== key));
  };

  const updateQuantity = (key: string, qty: number) => {
    if (qty < 1) {
      removeItem(key);
      return;
    }
    setItems(prev => prev.map(i => i.key === key ? { ...i, qty } : i));
  };

  const clearOrder = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToOrder, removeItem, updateQuantity, clearOrder, isOrderBuilderOpen, setOrderBuilderOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
