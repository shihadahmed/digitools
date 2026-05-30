import React from 'react';
import designToolImg from '../../assets/products/design-tool.png';
import operationImg from '../../assets/products/operation.png';
import portfolioImg from '../../assets/products/portfolio.png';
import shoppingCartImg from '../../assets/products/shopping-cart.png';
import socialMediaImg from '../../assets/products/social-media.png';
import writingImg from '../../assets/products/writing_2327400 1.png';

const iconMap = {
  writing: writingImg,
  design: designToolImg,
  shopping: shoppingCartImg,
  operation: operationImg,
  portfolio: portfolioImg,
  social: socialMediaImg
};

function ProductCard({ product = {}, onBuyNow }) {
  
  const getTagClasses = (type) => {
    if (type === 'best-seller') return 'bg-[#FEF3C7] text-[#D97706]';
    if (type === 'popular') return 'bg-[#E0E7FF] text-[#4F46E5]';
    return 'bg-[#DCFCE7] text-[#16A34A]';
  };

  return (
    <div className="relative bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left select-none">
      
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden p-2.5">
            <img 
              src={iconMap[product?.icon] || designToolImg} 
              alt={product?.name || "Product"} 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${getTagClasses(product?.tagType)}`}>
            {product?.tag || "New"}
          </span>
        </div>

        <h3 className="text-[#101727] text-xl font-extrabold mb-2">{product?.name || "Untitled Product"}</h3>
        <p className="text-[#6b6375] text-xs md:text-sm font-medium leading-relaxed mb-4 min-h-[40px]">
          {product?.description || "No description available."}
        </p>

        <div className="flex items-baseline gap-1 mb-6 border-b border-gray-50 pb-4">
          <span className="text-[#101727] text-2xl md:text-3xl font-black">${product?.price || 0}</span>
          <span className="text-[#6b6375] text-xs md:text-sm font-semibold">
            /{product?.period === 'monthly' ? 'Mo' : 'One-Time'}
          </span>
        </div>

        <ul className="space-y-3 mb-8">
          {(product?.features || []).map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs md:text-sm font-medium text-[#4b5563]">
              <svg className="w-4 h-4 text-[#16A34A] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => onBuyNow(product)}
        className="w-full py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] active:scale-[0.98] text-white font-bold text-sm rounded-2xl transition-all duration-150 shadow-md shadow-purple-100 cursor-pointer outline-none text-center"
      >
        Buy Now
      </button>

    </div>
  );
}
export default ProductCard