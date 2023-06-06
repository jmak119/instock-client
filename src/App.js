import Header from "./components/Header/Header";
import "./App.css";
import { HashRouter, Routes } from "react-router-dom/dist";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes></Routes>
    </HashRouter>
  );
}

export default App;
