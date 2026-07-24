import './App.css';
import Auth from './features/auth/pages/AuthPage';
import Header from './components/layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router';
import ChatPage from './features/chat/pages/ChatPage';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/chat' element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
