import Header from "../../components/Header";
import { Box } from "@mui/material";
import Navbar from "../global/navbar";
import Leftbar from "../global/leftbar";


const Dashboard = () => {
  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <Header title="Overview" subtitle="Welcome to your dashboard"/>
    </Box>
    </Box>
    </div>
    </div>
  )
}

export default Dashboard