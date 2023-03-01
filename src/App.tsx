import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import { store } from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
