import logo from "./logo.svg";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Logo from "./components/Logo";
import About from "./components/About";
import Our from "./components/Our";
import Express from "./components/Express";
import Toronto from "./components/Toronto";
import Prices from "./components/Prices";
import Delivery from "./components/Delivery";
import Canada from "./components/Canada";
import Cannabis from "./components/Cannabis";
import Alert from "./components/Alert";
import Ourstar from "./components/Ourstar";
import Popular from "./components/Popular";
import Latest from "./components/Latest";
import Customers from "./components/Customers";
import Store from "./components/Store";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* <Header /> */}
      <Logo />
      <About />
      <Our />
      <Express />
      <Toronto />
      <Prices />
      <Delivery />
      <Canada />
      <Cannabis />
      <Alert />
      <Ourstar />
      <Popular />
      <Latest />
      <Customers />
      <Store />
      <Footer />
      <Contact />
    </>
  );
}

export default App;
