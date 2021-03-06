import {Route,Routes, BrowserRouter as Router} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./components/Header";


function App() {
  return (
      <>
          <Router>
    <div className='container'>
        <Header/>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </div>
          </Router>
          <ToastContainer />
      </>
  );
}

export default App;
