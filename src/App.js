import React,{useState,useEffect} from 'react';
import {AppBar,Toolbar,Typography,Grid,Box} from '@material-ui/core';
import {readAll,deleteTodo} from './utils/api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {

 const[todos,setTodos] = useState([]);
 
 
 
 const handleDelete = (id) => {
  alert('Are you sure? You want to delete this todo?')
  deleteTodo(id).then(res => res)
  const newTodosArray = todos.filter(todo => todo.ref['@ref'].id !== id)
  setTodos(newTodosArray)
 }


 useEffect(()=>{
  readAll().then(res=>setTodos(res));
 },[])
 

  return(
    <>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
              Serverless Todo CRUD App
        </Typography>
      </Toolbar>
    </AppBar>
    <Box mt={10}>
      <Grid container>
        <Grid container>
          <Grid item xs={2} md={3}/>
          <Grid item xs={8} md={6}>
          <TodoForm todos={todos} setTodos={setTodos}/>
          </Grid>
          <Grid item xs={2} md={3}/>
        </Grid>
        <Grid container>
          <Grid item md={2}/>
          <Grid item xs={12} md={8}>
          <TodoList data={todos} setData={setTodos} handleDelete={handleDelete}/>
          </Grid>
          <Grid item md={2}/>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default App;

