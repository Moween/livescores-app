import Header from './Header';
import Main from './Main';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../utils/styles';
import '../css/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
