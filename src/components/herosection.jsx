export const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white h-[80vh] flex items-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Elevate Your <span className="text-blue-500">Style</span> 
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Discover the latest trends in high-quality fashion and accessories. 
            Limited time offers available now.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all">
              Shop Now
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold transition-all">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};