import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Userlist from './Userlist';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
function App() {
  return (
    <BrowserRouter>
    <div className='container'>
    <Routes>
    <Route path="/" element={<Userlist/>}></Route>
    <Route path="/create" element={<CreateUser/>}></Route>
    <Route path="/edit-user/:id" element={<EditUser/>}></Route>

      </Routes>
    </div>
      </BrowserRouter>
  
  );
}

export default App;
