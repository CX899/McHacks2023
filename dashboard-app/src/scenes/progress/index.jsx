import Header from '../../components/Header'
import {Box, Typography, Button} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'
import {doc, setDoc} from 'firebase/firestore'
import {db} from '../../firebase'

const Progress = () => {


  const handleAdd = async(e) => {
    e.preventDefault()
    await setDoc(doc(db, "users", "alovelace"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });


  }
  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Progress" subtitle="Keep track of progress"/>
    </Box>
    <Box m="60px">
      <Typography variant="h4">Progress</Typography>
        <Button onClick={handleAdd}/>
    </Box>
    </div>
    </div>
  )
}

export default Progress