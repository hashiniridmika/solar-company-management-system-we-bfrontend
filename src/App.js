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
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/stock" element={<Stock />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
