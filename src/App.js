import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Warehouse from './pages/Warehouse/Warehouse';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import Inventory from './pages/Inventory/Inventory';
import EditInventory from './pages/EditInventory/EditInventory';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Warehouse />} />
          <Route path= "/warehouse/:id" element={<WarehouseDetails />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* <Route path= "/inventory/:id" element={<InventoryDetails/>} /> */}
          <Route path="/EditInventory/:id" element={<EditInventory />} />
          {/* <Route path= "/Edit-Warehouse/:id" element={<EditWarehouse/>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
