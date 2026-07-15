import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductsPage from './pages/ProductsPage'

function App() {
  

  return (
    
  
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/products' element={<ProductsPage />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
     <Route path="/products/:id" element={<ProductDetailsPage/>}/>
    </Routes>

 </>



  )
}

export default App
