import React, { useState } from "react";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FileUploader from "./components/FileUploader";
import InvoicesPage from "./pages/InvoicesPage";
import ProductsPage from "./pages/ProductsPage";
import CustomersPage from "./pages/CustomersPage";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from './pages/Contact'

function App() {

  return (
      <Router>
        <Navbar />
        <div className="pt-16 container mx-auto px-4 py-8">
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={<FileUploader />}
            />
            <Route
              path="/invoice"
              element={<InvoicesPage />}
            />
            <Route
              path="/product"
              element={<ProductsPage />}
            />
            <Route
              path="/customer"
              element={<CustomersPage />}
            />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
