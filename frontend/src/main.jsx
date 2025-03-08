import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import DetailsView from "./pages/EventsDetails/index"
import MenuPage from './pages/menu/index.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details" element={<DetailsView />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  </BrowserRouter>
);