import logo from './logo.svg';
import './App.css';
import theme from './styles/theme';
import { TextField } from '@mui/material';
import EntryForm from './components/EntryForm';
import Journal from './components/Journal';

function App() {
  return (

    <div>
      {/* <header>
        Cultivate JOURNAL
      </header> */}
      <div>
      <Journal />
      </div>
    </div>
  );
}

export default App;
