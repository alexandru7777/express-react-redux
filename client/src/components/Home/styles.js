import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontSize: '3.5rem'
  },
  image: {
    marginLeft: '15px',
    position: 'relative',
    top: '9px'
  },
  [theme.breakpoints.down('sm')] : {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }

}));