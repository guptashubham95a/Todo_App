import {  List,Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import db from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
  <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="dummy check">
        </ListItemText>
      </ListItem>
      <DeleteForeverIcon onClick={event=>db.collection("todos").doc(props.todo.id).delete()} />
  </List>
    )
}

export default Todo;
