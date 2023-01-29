import Header from '../../components/Header'
import {Box, Typography, Button, TextField, Select} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'
import {doc, setDoc} from 'firebase/firestore'
import {db} from '../../firebase'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const Progress = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAdd = async(e) => {
    e.preventDefault()
    try {
    const res = await createUserWithEmailAndPassword(auth, email, password)

    await setDoc(doc(db, "users", res.user.uid), {
      name : name,
      age: age,
      phone: phone,
      email: email,
      password: password
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }
  }


  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Create User" subtitle="Add teammates"/>
    </Box>
    <Typography variant="h4" sx={{paddingLeft: 20}}>Create user form</Typography>
    <Box m="60px" backgroundColor="white" width="500px" paddingTop="40px">
      <form onSubmit={handleAdd}>
      <Box m="20px" display="flex" flexDirection="row">
      <TextField
        label="Name"
        name="name"
        variant="standard"
        sx={{marginRight: 10}}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Age"
        name="age"
        variant="standard"
        onChange={(e) => setAge(e.target.value)}
      />
      </Box>
      <Box m="20px" display="flex" flexDirection="row">
      <TextField
        label="Phone Number"
        name="phone"
        variant="standard"
        sx={{marginRight: 10}}
        onChange={(e) => setPhone(e.target.value)}
      />
       <TextField
        label="Email"
        name="email"
        variant="standard"
        onChange={(e) => setEmail(e.target.value)}
      />
      </Box>
      <Box m="20px" display="flex" flexDirection="row">
       <TextField
        label="Password"
        name="password"
        variant="standard"
        required
        fullWidth
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      </Box>
    </form>
        <Button onClick={handleAdd} sx={{paddingBottom: 10, paddingLeft: 3,}}>Add</Button>
    </Box>
    </div>
    </div>
  )
}

export default Progress