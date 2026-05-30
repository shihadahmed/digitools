import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Stats from './Components/Stats/Stats';
import Footer from './Components/Footer/Footer';
import Pricing from './Components/Pricing/Pricing';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import CTA from './Components/CallToAction/CTA';
import Products from './Components/Products/Products';
import productsData from './productsData.json';

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  const addToCart = (product) => {
    setCart([...cart, product]);
    const remainingProducts = products.filter((item) => item.id !== product.id);
    setProducts(remainingProducts);
  };

  const removeFromCart = (id) => {
    const removedItem = cart.find((item) => item.id === id);
    if (removedItem) {
      setProducts([...products, removedItem]);
    }
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} setActiveTab={setActiveTab} />
      <Hero />
      <Stats/>
      <Products
        products={products} 
        cart={cart} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onAddToCart={addToCart} 
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
      <HowItWorks/>
      <Pricing/>
      <CTA/>
      <Footer/>
    </> 
  );
}

export default App