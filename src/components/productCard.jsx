import { Link } from "react-router";

export const ProductCard = ({ product }) => {
  return (
    <div className="group relative max-w-sm bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="aspect-square overflow-hidden rounded-t-xl bg-gray-200">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* </Link> */}
        {/* Quick Add Overlay */}
       
      </div>
      
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold truncate">{product.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <div className="flex text-yellow-400 text-sm">
            ★ ★ ★ ★ <span className="text-gray-300">☆</span>
          </div>
        <Link to={`/product/${product.id}`}>
          <button className="bg-blue-300  text-black px-4 py-2 rounded-2xl font-medium shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
            Quick Add
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};