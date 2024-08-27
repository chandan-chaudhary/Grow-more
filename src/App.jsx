
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./Home";
import Header from './components/navigation/Navbar';
import { Toaster } from "react-hot-toast";
import ScrollToTop from './components/ScrollToTopView.jsx';
import Contact from "./components/contactUs/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
