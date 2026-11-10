import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";
import { products } from "./data/products.js";

function App() {
  function handleAddToCart(id) {
    const product = products.find((p) => p.id === id);
    alert(`Added ${product?.title ?? `product #${id}`} to your cart`);
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products products={products} onAddToCart={handleAddToCart} />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
