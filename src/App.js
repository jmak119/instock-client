import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          {/* <Route path= "/warehouse:id" element={<WarehouseDetails />} /> */}
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
  );
}

export default App;
