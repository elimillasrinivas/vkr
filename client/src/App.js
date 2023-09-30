// local imports
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import ProductDetails from './views/ProductDetails';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import profile from './assets/profile.jpg'

function App() {
  return (
    <>
    <BrowserRouter>
    <FloatingWhatsApp phoneNumber='8639552901' accountName='VKR Birthday Events' avatar={profile}/>
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/details' element={<ProductDetails/>}/>
    </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
