import Header from '../../components/Header'
import {Box, Typography} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'

const Calendar = () => {
  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Calendar" subtitle="Always know when thing's happen"/>
    </Box>
    </div>
    </div>
  )
}

export default Calendar