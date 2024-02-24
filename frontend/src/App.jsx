import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Login from "./Components/AuthPg/Login/Login";
import DocterRegistern from "./Components/AuthPg/Register/DocterRegister";
import PatientRegister from "./Components/AuthPg/Register/PatientRegister";
import Home from './Components/Home'
function App() {
  const [count, setCount] = useState(0);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/PatientRegister" element={<PatientRegister/>} />
          <Route path="/DoctorRegister" element={<DocterRegistern/>} />

          {/* <Route path="/slot" element={<Slot/>} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
