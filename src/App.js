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
import NotFound from './NotFount';

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center overflow-hidden">
      <TopNav />
      <SideNav />
      {/* <WallPaper /> */}
      <Routes className='flex-1'>
        <Route path='/' element={<WallPaper />}/>
        <Route path='/main' element={<Main />}/>
        <Route path='/ref' element={<Ref />}/>
        <Route path='/pass' element={<PassManager />}/>
        <Route path='/bdanbonga' element={<Bdanbonga />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
