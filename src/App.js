<<<<<<< HEAD
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Warehouse from "./pages/Warehouse/Warehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Inventory from "./pages/Inventory/Inventory";
import EditInventory from "./pages/EditInventory/EditInventory";
import Footer from "./components/Footer/Footer";

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
            <Route path="/warehouse/:id" element={<WarehouseDetails />} />
            <Route path="/inventory" element={<Inventory />} />
            {/* <Route path= "/inventory/:id" element={<InventoryDetails/>} /> */}
            <Route path="/inventory/:id" element={<EditInventory />} />
            {/* <Route path= "/warehouse/:id" element={<EditWarehouse/>} /> */}
          </Routes>
        </div>

        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
=======
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Header from "./components/Header/Header";
import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import EditInventory from "./pages/EditInventory/EditInventory";
import Footer from "./components/Footer/Footer";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
// import AddInventory from "./pages/AddInventory/AddInventory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Warehouse />} />
          <Route path="/warehouse/:id" element={<WarehouseDetails />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* <Route path= "/inventory/:id" element={<InventoryDetails/>} /> */}
          <Route path="/EditInventory/:id" element={<EditInventory />} />
          <Route path="/Edit-Warehouse/:id" element={<EditWarehouse />} />
          {/* <Route path="/AddInventory/" element={<AddInventory />} /> */}
          <Route path="/Add-Warehouse/" element={<AddWarehouse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
>>>>>>> develop
  );
}

export default App;
