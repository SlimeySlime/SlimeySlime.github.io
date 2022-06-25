// import logo from './logo.svg';
import './App.css';
import Main from './page/Main';
import {Routes, Route} from 'react-router-dom'
import TopNav from './nav/TopNav';
import WallPaper from './nav/WallPaper';
import Ref from './nav/Ref';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path='/' element={<WallPaper />}/>
        <Route path='/main' element={<Main />}/>
        <Route path='/ref' element={<Ref />}/>
      </Routes>
      <Main />
    </div>
  );
}

export default App;
