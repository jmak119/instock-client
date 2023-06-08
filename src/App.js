<<<<<<< HEAD
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import EditInventory from "./pages/EditInventory/EditInventory";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import AddInventory from "./pages/AddInventory/AddInventory";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>

        <div className="app__page">
          <Routes>
            <Route path="/" element={<Navigate to="/warehouse" />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route
              path="/warehouse/details/:id"
              element={<WarehouseDetails />}
            />
            <Route
              path="/inventory/details/:id"
              element={<InventoryDetails />}
            />
            <Route path="/inventory/edit/:id" element={<EditInventory />} />
            <Route path="/warehouse/edit/:id" element={<EditWarehouse />} />
            <Route path="/inventory/add" element={<AddInventory />} />
            <Route path="/warehouse/add" element={<AddWarehouse />} />
          </Routes>
        </div>

        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
=======
import "./App.css";
import EditInventory from "./pages/EditInventory/EditInventory";

function App() {
  return (
    <div className="app">
      <EditInventory />
    </div>
>>>>>>> edit-inventory-item
  );
}

export default App;
