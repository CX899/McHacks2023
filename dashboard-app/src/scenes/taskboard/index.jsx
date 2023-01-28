import Header from '../../components/Header'
import {Box, Typography} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'
import { CardContent, Card, Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
  


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
    { id: 1, title: 'Task 1', description: 'Description for task 1', status: 'done' },
    { id: 2, title: 'Task 2', description: 'Description for task 2', status: 'done' },
  ]);


    return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Tasks" subtitle="Track the TO-DO's"/>
    </Box>
    <Box>
    <form onSubmit={handleSubmit}>
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
      />
        <TextField
        label="Status"
        name="status"
        value={newTask.status}
        onChange={handleInputChange}
      />
      <Button type="submit">Add Task</Button>
    </form>

    </Box>
    <Box display="flex" flexDirection="column">
    <Grid container spacing={2} direction="column" >
      {tasks.map(task => (
    <Grid item xs={12} sm={4} key={task.id} margin="0 40px 0 40px" width="300px">
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {task.title}
          </Typography>
          <Typography variant="body2" component="p">
            {task.description} {task.status}
          </Typography>
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