import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  breakpoints: {
    values:{
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1140,
    },
    unit: 'px'
  },
  palette: {
    secondary: {
      main: '#42b72a'
    }
  }
});

export const useStyles = makeStyles((theme) => ({
  brandLogo: {
    color: 'white',
    padding: 10,
    paddingLeft: 0
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  soccerIcon: {
    color: 'white'
  },

  // Main Component Styles
  container: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  //  Table Component Styles
  table: {
    height: '80%',
    marginTop: 30,
  },

  team: {
    textAlign: 'right',
  },
  time: {
    padding: 'auto, 0',
  },

}));