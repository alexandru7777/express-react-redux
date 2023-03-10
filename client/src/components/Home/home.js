import React, {useState, useEffect} from 'react'
import { Container, Grid, Grow } from '@material-ui/core';
import {getPosts} from "../../actions/posts"
import Posts from '../posts/posts';
import { useDispatch } from 'react-redux'
import Form from "../form/form"
import useStyles from "./styles";

const Home = () => {
    const [ currentId, setCurrentId ] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
      
    }, [currentId, dispatch])
  return (
 
    <Grow in>
    <Container>
      <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
      </Grid>
    </Container>
    </Grow>
   
  )
}

export default Home;