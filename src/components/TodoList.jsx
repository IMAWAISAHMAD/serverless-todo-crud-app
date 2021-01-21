import React,{useState} from 'react';
import {List,ListItem,ListItemText,ListItemSecondaryAction,IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TodoDialog from './TodoDialog';
import {update} from '../utils/api';

export default function TodoList({data,handleDelete,setData}) {

    const[open,setOpen] = useState(false);

    const[todo,setTodo] = useState('');

    const [id,setId] = useState('');

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    const handleChange = (e) => {
        const{value} = e.target;
        setTodo(value);
    }

    const handleEdit = (id,todo) => { 
        handleOpen();
        setTodo(todo);
        setId(id);
    }
    
    const updateTodo = () => {
        const todoForUpdate = data.filter(todo=>todo.ref['@ref'].id===id).map(todo=>todo.data.todo);
        const [todoText]= todoForUpdate;
        if(todo!==todoText){
            update(id,{todo}).then(res=>{
                const todoIndex = data.findIndex(t=>t.ref['@ref'].id===id);
                data[todoIndex]=res; 
                setTodo('');
            });
            handleClose();
        }
        handleClose();
    }

return (
 <div>
    {data && data.map(todo=>(
        <List key={todo.ref['@ref'].id}>
            <ListItem>
                <ListItemText
                primary={todo.data.todo}
                />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit"  onClick={()=>handleEdit(todo.ref['@ref'].id,todo.data.todo)}>
                    <EditIcon/>
                </IconButton>
                <IconButton edge="end" aria-label="delete"  onClick={()=>handleDelete(todo.ref['@ref'].id)}>
                    <DeleteIcon/>
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    ))}
    <TodoDialog open={open} todo={todo} handleClose={handleClose} handleChange={handleChange} updateTodo={updateTodo}/>
 </div>             
)

}
