import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm">
      {/* 1. Image Placeholder */}
      {/* We use animate-pulse on individual elements for a refined look */}
      <div className="aspect-square w-full bg-gray-200 animate-pulse rounded-t-xl"></div>
      
      <div className="p-4">
        {/* 2. Title Placeholder */}
        {/* h-6 simulates the font-semibold height. w-3/4 gives it a realistic title length relative to the card */}
        <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-3 animate-pulse"></div>
        
        {/* 3. Category Placeholder */}
        {/* h-4 simulates smaller text. w-1/2 makes it look like a short category name */}
        <div className="h-4 bg-gray-100 rounded-md w-1/2 mb-4 animate-pulse"></div>
        
        {/* 4. Bottom Row (Price & Rating) Placeholder */}
        <div className="flex justify-between items-center pt-2">
          {/* Price - chunky block */}
          <div className="h-7 bg-gray-200 rounded-md w-20 animate-pulse"></div>
          
          {/* Rating - thinner block on the right */}
          <div className="h-4 bg-gray-100 rounded-md w-24 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;