import Header from '../../components/Header'
import {Box, FormControl, InputLabel, Typography} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'
import { CardContent, Card, Grid, TextField, Button, MenuItem, Select} from '@mui/material';
import { useState } from 'react';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { flexbox } from '@mui/system';
import { Rowing } from '@mui/icons-material';

const Task = () => {
  const [newTask, setNewTask] = useState({ title: '', description: '' , status: ''});

  const handleInputChange = event => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
    setNewTask({ title: '', description: '', status: '' });
  };

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Push to Main-Branch', description: 'Description for task 1', status: 'Completed' },
    { id: 2, title: 'Task 2', description: 'Description for task 2', status: 'Completed' },
  ]);


    return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Tasks" subtitle="Track the TO-DO's"/>
    </Box>
    <Box p="40px" marginLeft="40px" marginBottom="40px" backgroundColor="white" width="700px" height="50px" borderRadius="10px" boxShadow="1" marginLeft="400px">
    <FormControl fullWidth onSubmit={handleSubmit} sx={{width: "700px", display: "flex", flexDirection: "row"}}>
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
      <Button type="submit">Add Task</Button>
    </FormControl>
    </Box>
    <Box display="flex">
    <Grid container spacing={2}>
      {tasks.map(task => (
    <Grid item xs={12} sm={3} key={task.id} margin="0 40px 0 40px" width="300px">
      <Card>
        <CardContent>
        <HighlightOffRoundedIcon onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}/>
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
                    task.status === 'Completed' ? '#92f7a3' 
                    : task.status === 'In Progress' ? '#f7ef92'
                    : '#bccff7'
                    }
                    borderRadius="15px"
                    padding="5px"
                    alignItems="center"
                    justifyContent="center"
                    >{task.status}</Typography> 
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
    </Box>

    <Box>
    
    </Box>
    </div>
    </div>
  )
}

export default Task