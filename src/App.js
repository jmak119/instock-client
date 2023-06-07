import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from './pages/Warehouse/Warehouse';
import EditInventory from './pages/EditInventory/EditInventory';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path= "/" element={<Warehouse />} />
          {/* <Route path= "/warehouse:id" element={<WarehouseDetails />} /> */}
          {/* <Route path= "/inventory" element={<Inventory/>} /> */}
          {/* <Route path= "/inventory/:id" element={<InventoryDetails/>} /> */}
          <Route path= "/EditInventory/:id" element={<EditInventory />} />
          {/* <Route path= "/Edit-Warehouse/:id" element={<EditWarehouse/>} /> */}
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
