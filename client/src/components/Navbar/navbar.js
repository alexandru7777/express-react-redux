import React, {useState, useEffect} from 'react'
import {AppBar,  Typography, Toolbar, Avatar, Button} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import useStyles from "./styles";
import { Link } from 'react-router-dom';
import memories from "../../images/memory-card-2.png";
import {useNavigate, useLocation} from 'react-router-dom';
function Navbar() {

    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const logout = () => {
      dispatch({ type: 'LOGOUT' })

      navigate('/');

      setUser(null);

    }

    useEffect(() => {
      const token = user?.token;

      //JWT...
      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

  return (
    <AppBar className={classes.appBar}
      position="static" color="inherit">
    <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
        Memories
        <img className={classes.image} src={memories} alt="Memories" height="60px"  />
        </Typography>
      </div>
    <Toolbar className={classes.toolbar}>
    {user ? (
      <div className={classes.profile}>
        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
          {user.result.name.charAt(0)}
        </Avatar>
        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
        <Button variant='contained' onClick={logout} className={classes.logout} color='secondary'>Log Out</Button>
      </div>
    ) : (
      <Button component={Link} to="/auth" variant='contained' color='primary'>Sign In</Button>
    )}
    </Toolbar>
  </AppBar>
  )
}

export default Navbar