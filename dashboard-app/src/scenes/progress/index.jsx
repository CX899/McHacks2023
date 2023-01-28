import Header from '../../components/Header'
import {Box, Typography} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'

const Progress = () => {
  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Progress" subtitle="Keep track of progress"/>
    </Box>
    </div>
    </div>
  )
}

export default Progress