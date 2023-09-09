// local imports
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import ProductDetails from './views/ProductDetails';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/details' element={<ProductDetails/>}/>
    </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
