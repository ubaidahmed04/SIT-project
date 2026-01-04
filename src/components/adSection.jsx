export const PromoBanner = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Promo 1 */}
        <div className="bg-linear-to-r from-purple-600 to-blue-500 rounded-3xl p-10 text-white flex flex-col justify-center">
          <span className="bg-white/20 w-fit px-3 py-1 rounded-full text-xs uppercase font-bold mb-4">New Season</span>
          <h2 className="text-3xl font-bold mb-4">Get 30% Off Home Decor</h2>
          <button className="bg-white text-purple-600 w-fit px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-shadow">
            Shop Sale
          </button>
        </div>
        
        {/* Promo 2 */}
        <div className="bg-gray-100 rounded-3xl p-10 flex flex-col justify-center border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Member Exclusive</h2>
          <p className="text-gray-600 mb-6">Join our loyalty program for free shipping on all orders.</p>
          <button className="bg-black text-white w-fit px-6 py-2 rounded-lg font-bold">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};