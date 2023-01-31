import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/system'

const Dasboard = () => {
  return (
    <Box m="20px"> 
    <Box display="flex" justifyContent="space-between" alignContent="center">
      <Header title="DASHBORD" subtitle="Welcome to your dashboard"/>
    </Box>
    </Box>
  )
}

export default Dasboard