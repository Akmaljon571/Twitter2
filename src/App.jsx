import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login, Header, Home } from './contect'
import './App.scss';
function App() {
    return (
      <BrowserRouter>
           <Routes>
             <Route path='/' element = {<Header />} />
             <Route path='/login' element = {<Login />} />
             <Route path='/home' element = {<Home />} />
           </Routes>
      </BrowserRouter>
    )
}

export default App;
