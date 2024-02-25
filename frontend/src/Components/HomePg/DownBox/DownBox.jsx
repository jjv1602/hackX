import React from 'react'
import st from './Downbox.module.css';
import { FiFilter } from "react-icons/fi";
// import { Box, Tag, Tooltip } from '@chakra-ui/react'
// import { Select } from '@chakra-ui/react'
import { Suspense, lazy } from 'react';
import Docters from './Docters';
// Custom Card for chakra ui tooltip 
const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box p='1'>
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
))

const Result=React.lazy(()=>import('./Result'));

const DownBox = (props) => {

  return (
    <>
      <Docters/>
    </>
  )
}

export default DownBox
