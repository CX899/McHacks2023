import Header from '../../components/Header'
import {Box, Typography, Button} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'
import {doc, getDoc} from 'firebase/firestore'

const Progress = () => {
  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Progress" subtitle="Keep track of progress"/>
    </Box>
    <Box m="60px">
        <Button />
    </Box>
    </div>
    </div>
  )
}

export default Progress