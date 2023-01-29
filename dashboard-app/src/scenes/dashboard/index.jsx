import Header from "../../components/Header";
import { Box } from "@mui/material";
import Navbar from "../global/navbar";
import Leftbar from "../global/leftbar";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";

const Dashboard = () => {
  const[count, setCount] = useState(0)

  useEffect(() => {
    const fetchUsers = async () => {
    try {
      const users = await collection(db,'users').count().get()
      setCount(users)
      console.log(users)
    } catch (error) {
      console.log(error)
    }
  }
  fetchUsers()
  }, [])

  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <Header title="Overview" subtitle="Welcome to your dashboard"/>
    {count.length > 0 ? <h1>{count.length} users</h1> : <h1>No users</h1>}
    </Box>
    </Box>
    </div>
    </div>
  )
}

export default Dashboard