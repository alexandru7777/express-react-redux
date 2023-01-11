import React, { useState, useEffect } from "react";
import useStyles from "./styles"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux'
import {getPosts} from "./actions/posts"
import memories from "./images/memory-card-2.png";
import Form from "./components/form/form";
import Posts from "./components/posts/posts";

function App() {
  const [ currentId, setCurrentId ] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    
  }, [currentId, dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar}
        position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
          <img className={classes.image} src={memories} alt="Memories" height="60px"  />
        </Typography>
    
      </AppBar>
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
    </Container>
  );
}

export default App;
