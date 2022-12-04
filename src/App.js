import './App.scss'
import HomePage from './pages/home/home';
import NavBar from './component/Navbar';
import LeftBar from './component/LeftBar';
import RightBar from './component/RightBar';

function App() {
  
  return ( 
    <div className='full-layout'>
      <NavBar/>
      <div className='layout-home'>
        <LeftBar/>
        <HomePage/>
        <RightBar/>
      </div>
    </div>

  );
}

export default App;
