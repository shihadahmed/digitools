import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from './ProductCard';

function Products({ products = [], cart = [], activeTab, setActiveTab, onAddToCart, onRemoveFromCart, onClearCart }) {

  const handleBuyNow = (product) => {
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000
    });
  };

  const handleCheckout = () => {
    toast.success("Order Successful!", {
      position: "top-right",
      autoClose: 3000
    });
    onClearCart();
  };

  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 md:px-12 select-none" id="products">
      <ToastContainer />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="text-[#101727] text-4xl md:text-[52px] font-black tracking-tight mb-4 text-center">
          Premium Digital Tools
        </h2>
        
        <p className="text-[#6b6375] text-sm md:text-base font-medium max-w-2xl text-center mb-12 leading-relaxed">
          Choose from our curated collection of premium digital products designed <br className="hidden md:block" /> 
          to boost your productivity and creativity.
        </p>

        <div className="inline-flex items-center bg-white border border-gray-200 p-1.5 rounded-full mb-16 shadow-sm">
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer outline-none ${
              activeTab === 'products' ? 'bg-[#8B5CF6] text-white shadow-lg' : 'text-[#6b6375] hover:text-[#101727]'
            }`}
          >
            Products
          </button>
          
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer outline-none ${
              activeTab === 'cart' ? 'bg-[#8B5CF6] text-white shadow-lg' : 'text-[#6b6375] hover:text-[#101727]'
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {activeTab === 'products' ? (
          products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {products.map((singleProduct) => (
                <ProductCard 
                  key={singleProduct.id} 
                  product={singleProduct} 
                  onBuyNow={handleBuyNow}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg font-medium">All products have been added to your cart!</p>
            </div>
          )
        ) : (
          <div className="w-full max-w-4xl bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm text-left">
            <h3 className="text-[#101727] text-xl font-extrabold mb-6">Your Cart</h3>
            
            {cart.length > 0 ? (
              <div className="flex flex-col gap-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-[#F8F9FA] rounded-2xl p-4 border border-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-xl">
                        {item.id === 1 && "📝"}
                        {item.id === 2 && "🎨"}
                        {item.id === 3 && "📷"}
                        {item.id === 4 && "⚙️"}
                        {item.id === 5 && "📄"}
                        {item.id === 6 && "📊"}
                        {item.id === 7 && "🚀"}
                        {item.id === 8 && "🎬"}
                        {item.id === 9 && "💻"}
                        {item.id === 10 && "🎓"}
                      </div>
                      <div>
                        <h4 className="text-[#101727] font-bold text-base md:text-lg">{item.name}</h4>
                        <p className="text-[#6b6375] text-sm font-semibold">${item.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => onRemoveFromCart(item.id)}
                      className="text-[#FF3B30] hover:text-[#D32F2F] font-bold text-sm transition-all cursor-pointer outline-none"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-4">
                  <span className="text-[#6b6375] font-semibold text-base">Total:</span>
                  <span className="text-[#101727] font-black text-2xl md:text-3xl">${totalCartPrice}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full mt-6 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] active:scale-[0.99] text-white font-bold text-base rounded-2xl transition-all shadow-md shadow-purple-100 cursor-pointer outline-none text-center"
                >
                  Proceed To Checkout
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg font-medium">Your cart is currently empty!</p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
export default Products