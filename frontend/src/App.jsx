import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Login from "./Components/AuthPg/Login/Login";
import DocterRegistern from "./Components/AuthPg/Register/DocterRegister";
import PatientRegister from "./Components/AuthPg/Register/PatientRegister";
import store from './store/store';
import { Provider } from 'react-redux'
import Homepg from "./Components/HomePg/Homepg";
import Appointments from "./Components/HomePg/DownBox/Appointments";
import Medicines from "./Components/HomePg/DownBox/Medicines";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepg/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/PatientRegister" element={<PatientRegister />} />
          <Route path="/DoctorRegister" element={<DocterRegistern />} />
          <Route path="/Appointments" element={<Appointments/>} />
          <Route path="/Dashboard" element={<Homepg/>} />
          <Route path="/medicnes" element={<Medicines/>} />
          {/* <Route path="/slot" element={<Slot/>} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );

}

export default App;
