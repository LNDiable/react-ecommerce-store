
import PS5 from '../assets/PS5.png'

function ProductCard(){
    return(
     <div className='wrapper'>  
    <div className='product-card'>
    <img src={PS5} alt="PS5" className='product-image'></img>
    <div className='Product-info'>
    <h3>Playstation 5</h3>
    <p>599</p>
    <p>In stock</p></div>
    <button type='button' className='btn'>Add to basket</button>
    </div></div> 


    )
}
export default ProductCard