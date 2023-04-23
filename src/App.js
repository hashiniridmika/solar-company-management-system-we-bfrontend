import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";
import NoPage from "./pages/NoPage";
import Order from "./pages/Order";
import Stock from "./pages/Stock";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Order" element={<Order />}></Route>
          <Route path="/Stock" element={<Stock />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
