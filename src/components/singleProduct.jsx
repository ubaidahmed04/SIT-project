import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

const ProductDetail = ({productData}) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Premium Heritage Crewneck",
    price: 89.00,
    rating: 4.8,
    reviews: 124,
    description: "Crafted from 100% organic cotton, this mid-weight crewneck features a relaxed fit and reinforced stitching. Perfect for transitional weather and layering.",
    colors: ["bg-slate-700", "bg-stone-400", "bg-emerald-900"],
    sizes: ["S", "M", "L", "XL"]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Image Gallery */}
          <div className="space-y-4 sticky top-8">
            <div className="aspect-7/5 h-2/3 bg-slate-100 rounded-2xl overflow-hidden">
              <img 
                src={productData?.image}
                alt="Product" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-slate-100 rounded-lg cursor-pointer border-2 border-transparent hover:border-slate-900 transition-all overflow-hidden">
                   <img src={`https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=200&sig=${i}`} alt="thumbnail" className="object-cover w-full h-full" />
                </div>
              ))}
            </div> */}
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <nav className="flex text-sm text-slate-500 mb-4 space-x-2">
              <span>{productData.category}</span>
              {/* <span>/</span>
              <span>Sweatshirts</span> */}
            </nav>

            <h1 className="text-2xl font-bold tracking-tight mb-2">{productData.title}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm text-slate-500 font-medium">({product.reviews} reviews)</span>
              <span className="text-emerald-600 text-sm font-semibold px-2 py-1 bg-emerald-50 rounded-md">In Stock</span>
            </div>

            <p className="text-3xl font-light mb-8">{productData.price.toFixed(2)}</p>

            <div className="h-px bg-slate-200 mb-8" />

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button key={color} className={`w-8 h-8 rounded-full ${color} ring-offset-2 ring-2 ring-transparent hover:ring-slate-400 transition-all`} />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest">Select Size</h3>
                <button className="text-sm text-slate-500 underline underline-offset-4">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium border-2 rounded-xl transition-all ${
                      selectedSize === size ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-600 hover:border-slate-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 mb-8">
              <div className="flex items-center border-2 border-slate-200 rounded-xl px-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-xl">-</button>
                <span className="px-4 font-bold w-12 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-xl">+</button>
              </div>
              <button className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              <button className="p-4 border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-400 hover:text-rose-500">
                <Heart size={24} />
              </button>
            </div>

            {/* Product Info Accordion/List */}
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>{product.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-3 text-sm">
                  <Truck size={20} className="text-slate-400" />
                  <span>Free Express Shipping</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <RotateCcw size={20} className="text-slate-400" />
                  <span>30-Day Easy Returns</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <ShieldCheck size={20} className="text-slate-400" />
                  <span>2 Year Warranty</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;