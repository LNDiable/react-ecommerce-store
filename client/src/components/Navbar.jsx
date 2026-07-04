import { Link } from "react-router-dom";


function Navbar()
{
    return(
        
        <nav className='navbar'>
            <h1>E-comms Website</h1>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/login">Login</Link></li></ul>
            <li><Link to="/cart">Cart</Link></li>
        </nav>
        
    )

    
}
export default Navbar