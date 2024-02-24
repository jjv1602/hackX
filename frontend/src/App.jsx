import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import './App.css'
import Login from './Components/AuthPg/Login/Login';
import Register from './Components/AuthPg/Register/Register';

import "primereact/resources/themes/lara-light-cyan/theme.css";

function App( Component, pageProps ) {
  const [count, setCount] = useState(0)

  return (
    <PrimeReactProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/slot" element={<Slot/>} /> */}
      </Routes>
    </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
