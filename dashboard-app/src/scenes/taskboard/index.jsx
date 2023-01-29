import Header from '../../components/Header'
import {Box, FormControl, Typography} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'
import { CardContent, Card, Grid, TextField, Button, MenuItem, Select} from '@mui/material';
import { useEffect, useState } from 'react';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Task = () => {

  const [newTask, setNewTask] = useState({ title: '', description: '' , status: ''});
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      setTasks(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getTasks();
  }, []);

  const handleInputChange = event => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };


  const handleAddTask = async () => {
    const task = {
      title: newTask.title,
      description: newTask.description,
      status: newTask.status,
    };
    await addDoc(collection(db, 'tasks'), {
      title: newTask.title,
      description: newTask.description,
      status: newTask.status,
    });

    setTasks([...tasks, task]);
    setNewTask({
      title: '',
      description: '',
      status: ''
    });
  };


  const handleDeleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    setTasks(tasks.filter(task => task.id !== id));
  };
  


  
  return (
  <div className='app'>
    <Leftbar/>
  <div className='content'>
    <Navbar/>
  <Box m="60px">
      <Header title="Tasks" subtitle="Track the TO-DO's"/>
  </Box>
  <Box display="flex" flexDirection="column" alignItems="center">
    <FormControl fullWidth sx={{ width: '700px', display: 'flex', flexDirection: 'row' }}>
      <TextField
        label="Title"
        name="title"
        value={newTask.title}
        onChange={handleInputChange}
      />
      <TextField
        label="Description"
        name="description"
        value={newTask.description}
        onChange={handleInputChange}
        padding="10px"
      />
      <Select
        value={newTask.status}
        name="status"
        label="Status"
        onChange={handleInputChange}
        height="25px"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="To-do">To-Do</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
      </Select>
    <Button onClick={handleAddTask}>Add Task</Button>
  </FormControl>
</Box>    

<Grid container spacing={2}>
  {tasks.map(task => (
    <Grid item xs={12} sm={3} key={task.id} margin="0 40px 0 40px" width="300px">
      <Card>
        <CardContent>
          <HighlightOffRoundedIcon onClick={() => handleDeleteTask(task.id)} />
            <Typography color="textSecondary" gutterBottom>
              {task.title}
            </Typography>
            <Typography variant="body2" component="p">
              {task.description}
            </Typography>
            <Typography
              width="60%"
              m="2px"
              display="flex"
              backgroundColor={
                task.status === 'Completed'
                  ? '#92f7a3'
                  : task.status === 'In Progress'
                  ? '#f7ef92'
                  : '#bccff7'
              }
              borderRadius="15px"
              padding="5px"
              alignItems="center"
              justifyContent="center"
            >
              {task.status}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>    
</div>
</div>
  )
}

export default Task