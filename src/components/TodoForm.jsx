import React,{useState} from 'react'
import {Button,TextField} from '@material-ui/core';
import {createTodo} from '../utils/api';

export default function TodoForm({todos,setTodos}) {
const [value,setValue] = useState('');

const handleChange = (e) => {
    const {value} = e.target;
    setValue(value);
}


const handleSubmit = (e) => {
    e.preventDefault();
    if(value.length){
        const myTodo = {
            todo:value,
            isComplete:false
        } 
        createTodo(myTodo).then(res=>{
            const newTodosArray = todos.concat([res]);
            setTodos(newTodosArray);
            setValue('');
        } 
        );  
    }   
}

return (
 <>
    <form onSubmit={handleSubmit}>
        <TextField id="addTodo" name="addTodo" label="Todo" onChange={handleChange} value={value} fullWidth/>
        <br/>
        <br/>
        <Button variant='contained' color='primary' type='submit'>Add Todo</Button>
    </form>
 </>
)
}
