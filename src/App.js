import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ChannelState from './context/ChannelState';
import ChatState from './context/ChatState';

function App() {
  return (
    <ChannelState className='App'>
      <ChatState>
      <BrowserRouter className="App">
        <Routes>
          <Route path='/' element={<><Navbar /><Hero /></>} />
          <Route path='/channels' element={<Home />} />
          <Route path='/channels/:id' element={<Home />} />
        </Routes>
      </BrowserRouter>
      </ChatState>
    </ChannelState>
  );
}

export default App;
