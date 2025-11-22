import './App.css'
import {Routes, Route} from "react-router-dom";

import SiteNavbar from "./assets/components/Navbar";
import SiteFooter from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import Product from './assets/pages/Product';
import ProductDetail from './assets/components/ProductDetail';
import WaFloatingPortal from "./assets/components/whatsappFloating";
import ScroolFloating from "./assets/components/scroolFloating";
import Contact from "./assets/pages/Contact";


export default function App() {
  return (
    <>
      <SiteNavbar />
      <main>
        <div className='container py-2'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
        <WaFloatingPortal/>
        <ScroolFloating/>
      </main>
      <SiteFooter />
    </>
  );
}
