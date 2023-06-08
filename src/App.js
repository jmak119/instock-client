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
            {/* <Route path="/inventory/add" element={<AddInventory />} /> */}
            <Route path="/warehouse/add" element={<AddWarehouse />} />
          </Routes>
        </div>

        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
