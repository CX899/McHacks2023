import Header from '../../components/Header'
import {Box, Typography} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'

const Project = () => {
  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Project" subtitle="Managing projects"/>
    </Box>
    </div>
    </div>
  )
}

export default Project