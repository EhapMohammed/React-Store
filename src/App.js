// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Product from './components/Product/Product';
import Details from "./components/Details";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductList />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
