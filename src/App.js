// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import './Style.css'
import Cart from "./Cart";
import NavBar from "./NavBar";
import Bill from "./Bill";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
      {/* <Route path="/" element={<NavBar/>}></Route> */}
      <Route path="/" element={<Cart/>}></Route>
      <Route path="/bill" element={<Bill/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
