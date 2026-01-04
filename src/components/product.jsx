import React, { useState } from 'react';
import { Filter, ChevronDown, SlidersHorizontal, Heart, Search, X } from 'lucide-react';

const AllProductsPage = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ["All", "Outerwear", "T-Shirts", "Accessories", "Footwear"];
  
  const products = [
    { id: 1, name: "Premium Heritage Crewneck", price: 89, category: "Outerwear", tag: "New Arrival", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "Minimalist Leather Sneakers", price: 120, category: "Footwear", tag: "Sale", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Organic Cotton Tote", price: 25, category: "Accessories", image: "https://images.unsplash.com/photo-1544816153-36ad49bc10d8?auto=format&fit=crop&q=80&w=600" },
    { id: 4, name: "Heavyweight Boxy Tee", price: 45, category: "T-Shirts", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600" },
    { id: 5, name: "Wool Blend Overcoat", price: 210, category: "Outerwear", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=600" },
    { id: 6, name: "Classic Baseball Cap", price: 30, category: "Accessories", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Search & Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Shop All</h1>
          <div className="relative hidden md:block w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-full focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-slate-600 hover:text-slate-900 font-medium text-sm">Sign In</button>
            <div className="h-6 w-px bg-slate-200" />
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold">Cart (0)</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Price Range</h3>
              <input type="range" className="w-full accent-slate-900" />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>$0</span>
                <span>$500+</span>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-slate-500 text-sm">{products.length} products found</span>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center space-x-2 border border-slate-200 bg-white px-4 py-2 rounded-lg text-sm"
                >
                  <Filter size={16} />
                  <span>Filters</span>
                </button>
                <div className="relative group">
                  <button className="flex items-center space-x-2 border border-slate-200 bg-white px-4 py-2 rounded-lg text-sm">
                    <span>Sort by: Featured</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-slate-200 mb-4">
                    {product.tag && (
                      <span className="absolute top-3 left-3 z-10 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {product.tag}
                      </span>
                    )}
                    <button className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-slate-900 hover:bg-white">
                      <Heart size={18} />
                    </button>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm shadow-xl">
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800 mb-1 group-hover:underline">{product.name}</h3>
                      <p className="text-xs text-slate-500 uppercase tracking-tighter">{product.category}</p>
                    </div>
                    <p className="font-bold text-slate-900">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center space-x-2">
              <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-white transition-colors">1</button>
              <button className="px-4 py-2 border border-slate-200 rounded-lg bg-slate-900 text-white">2</button>
              <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-white transition-colors">3</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)}><X size={24} /></button>
            </div>
            {/* Reuse Sidebar Filter Logic Here */}
            <div className="space-y-8">
               <h3 className="font-bold text-sm mb-4">Categories</h3>
               {categories.map(cat => (
                 <label key={cat} className="flex items-center space-x-3 mb-3">
                   <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                   <span className="text-slate-700">{cat}</span>
                 </label>
               ))}
            </div>
            <button className="w-full mt-12 bg-slate-900 text-white py-4 rounded-xl font-bold">Apply Filters</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProductsPage;