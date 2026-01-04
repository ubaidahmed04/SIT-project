export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">LuxeShop.</h2>
            <p className="text-gray-500">Premium quality products curated for your daily lifestyle.</p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">New Arrivals</li>
              <li className="hover:text-blue-600 cursor-pointer">Best Sellers</li>
              <li className="hover:text-blue-600 cursor-pointer">Sale</li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Order Tracking</li>
              <li className="hover:text-blue-600 cursor-pointer">Return Policy</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>© 2026 LuxeShop. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};