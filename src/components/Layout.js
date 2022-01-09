import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { format } from 'date-fns';
import { Avatar } from '@material-ui/core';
 
const drawerwidth = 240;

const useStyle = makeStyles((theme) => {
    return {
        page:{
            background:'#f9f9f9',
            width:'100%',
            padding:theme.spacing(3)
        },
        drawer:{
            width:drawerwidth,
        },
        drawerPaper:{
            width:drawerwidth,
        },
        root:{
           display:'flex' 
        },
        active:{ 
            background:'#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        }, 
        AppBar:{
            width:`calc(100% - ${drawerwidth}px)`
        },
        Toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avator:{
            marginLeft: theme.spacing(2)
        }
    }
})
const Layout = ({children}) => {
    const classes = useStyle();
    const history = useHistory();
    const location = useLocation();

    const menueItems = [
        {   
        text:'My Notes',
        icon:<SubjectOutlined color='secondary' />,
        path:'/'
    },
    {   
        text:'Creates Notes',
        icon:<AddCircleOutlined color='secondary' />,
        path:'/create'
    }
    ]

    return (
        <div className={classes.root}>
        <AppBar 
        className={classes.AppBar}
        elevation={0}
        >
            <Toolbar>
            <Typography className={classes.date}>
              Today is the {format(new Date(), 'do MMM y') }
            </Typography>
            <Typography>
            Hims
            </Typography>
            <Avatar className={classes.avator} src="https://images.unsplash.com/photo-1641373690896-4bfe32d6cd77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            </Toolbar>
        </AppBar>
        <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{
            paper:classes.drawerPaper
        }}
        >
            <div>
                 <Typography variant='h5' className={classes.title}>
                  Silky notes
                 </Typography>
            </div> 
           <List>
           { menueItems.map(item => (
                   <ListItem button 
                   onClick={() =>  history.push(item.path)} 
                   key={item.text}
                   className={location.pathname === item.path ? classes.active:null}
                   >
                   <ListItemIcon>{item.icon}</ListItemIcon>
                   <ListItemText primary={item.text} />
                   </ListItem>
               ))}
           </List>
        </Drawer>
            <div className={classes.page}>
                <div className={classes.Toolbar}></div>
            {children}
            </div>
        </div>
    )
}

export default Layout
