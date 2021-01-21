import React from 'react'
import {Button,Dialog,DialogTitle,DialogContentText,TextField,DialogContent,DialogActions} from '@material-ui/core'

export default function TodoDialog({open,todo,handleClose,handleChange,updateTodo}) {
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
            <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Edit todo text here.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Todo Text"
                    type="text"
                    fullWidth
                    value={todo}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={updateTodo} color="primary">
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    )
}
