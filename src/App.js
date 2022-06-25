// import logo from './logo.svg';
import './App.css';
import Main from './post/Main';
import {Routes, Route} from 'react-router-dom'
import TopNav from './nav/TopNav';
import WallPaper from './nav/WallPaper';
import Ref from './nav/Ref';
import SideNav from './nav/SideNav';
import PassManager from './project/pass';
import Bdanbonga from './project/bdan';

function App() {
  return (
    <div className="flex flex-col justify-center">
      <TopNav />
      {/* <div className='flex flex-1 w-screen'> */}
      <SideNav />
      <Routes className='flex-1'>
        <Route path='/' element={<WallPaper />}/>
        <Route path='/main' element={<Main />}/>
        <Route path='/ref' element={<Ref />}/>
        <Route path='/pass' element={<PassManager />}/>
        <Route path='/bdanbonga' element={<Bdanbonga />}/>
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
