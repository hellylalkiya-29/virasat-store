import { useSelector } from 'react-redux';

function Navbar() {
  const items = useSelector((state) => state.cart.items);

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white/30 backdrop-blur-md shadow-lg rounded-b-3xl">
      <h2 className="text-2xl font-bold text-blue-900">Virasat Store</h2>
      <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
        Cart: {items.length} Items
      </div>
    </nav>
  );
}

export default Navbar;