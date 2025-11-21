import './App.css'
import {Routes, Route} from "react-router-dom";

import SiteNavbar from "./assets/components/Navbar";
import SiteFooter from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import Product from './assets/pages/Product';
import ProductDetail from './assets/components/ProductDetail';



export default function App() {
  return (
    <>
      <SiteNavbar />
      <main>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
          </Routes>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
