import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';
import Navbar from './components/Navbar';

function App() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <header className="text-center py-10">
        <h1 className="text-6xl font-extrabold text-blue-900 mb-3">Virasat Store</h1>
        <p className="text-gray-700 italic text-lg">"A legacy of quality, preserved for you."</p>
      </header>
      
      <div className="product-grid max-w-7xl mx-auto pb-10">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} className="product-image" />
            <h3 className="font-bold text-gray-800 text-lg mb-2 h-14 overflow-hidden">
              {p.title.substring(0, 30)}...
            </h3>
            <p className="text-blue-800 font-bold text-2xl mb-5">
              ${p.price}
            </p>
            <button 
              onClick={() => dispatch(addToCart(p))}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all font-semibold shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
