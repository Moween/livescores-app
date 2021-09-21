import Header from './components/Header';
import Main from './components/Main';
import './css/App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values:{
      'xs': 0,
      'sm': 375,
      'md': 768,
      'lg': 960,
      'xl': 1140,
    },
    unit: 'px'
  },
  palette: {
    secondary: {
      main: '#42b72a'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
