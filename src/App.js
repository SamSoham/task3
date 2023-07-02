import {Routes,Route} from 'react-router-dom'
import './App.css';
import Mint from './pages/mint';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mint/>}/>
    </Routes>
  );
}

export default App;
