import AppBar from './Components/AppBar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { CartProvider } from './Components/Item/ItemCountContext';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import ThankYou from './Components/ThankYou';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<h1>Error 404: Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
