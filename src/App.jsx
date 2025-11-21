import './App.css'
import {Routes, Route} from "react-router-dom";

import SiteNavbar from "./assets/components/Navbar";
import SiteFooter from "./assets/components/Footer";
import Home from "./assets/pages/Home";

export default function App() {
  return (
    <>
      <SiteNavbar />
      <main className="py-5">
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<h1>Halaman Kontak</h1>}/>
            <Route path="/products" element={<h1>Halaman Produk</h1>}/>
            <Route path="/product/:id" element={<h1>Halaman Detail Produk</h1>}/>
          </Routes>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
