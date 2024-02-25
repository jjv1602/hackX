import React from 'react'
import Design from './Design.jsx';
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
const DesignRoutes = () => {
  return (
    <Routes>
      <Route path="/conf" element={<ChakraProvider> <Design /> </ChakraProvider>}>
      </Route>
    </Routes>
  )
}

export default DesignRoutes
