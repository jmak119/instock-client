import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { HashRouter, Routes } from "react-router-dom/dist";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes></Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
