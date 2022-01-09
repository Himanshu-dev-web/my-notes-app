import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { DeleteOutlined } from '@material-ui/icons';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import { yearsToMonths } from 'date-fns';
import { blue, green, pink, yellow } from '@material-ui/core/colors';

const useStyles =  makeStyles({
  avatar:{
   backgroundColor:(note) => {
     if(note.category ==='work'){
       return yellow[700]
     }
     if(note.category ==='money'){
      return green[500]
    }
    if(note.category ==='todos'){
      return pink[700]
    }
    return blue[500];
   }
  }
})   

const NotesCard = ({note , handleDelete}) => {
  const classes = useStyles(note)

    return (
        <div>
          <Card elevation={1} className={classes.test}>
          <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
          /> 
          <CardContent>
            <Typography variant="body2" color='textSecondary'>
                {note.details}
            </Typography>
          </CardContent>
          </Card>
        </div>
    )
}

export default NotesCard
