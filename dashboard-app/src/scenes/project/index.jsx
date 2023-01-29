import Header from '../../components/Header'
import {Box} from '@mui/material'
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h1>No project started</h1>
        </Box>
    </Box>
    </div>
    </div>
  )
}

export default Project