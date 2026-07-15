import { Link } from "react-router-dom"



function ProductCard(props){
    return(
     <div className='wrapper'>
    <Link to={`/products/${props.id}`} className='product-link'>
    <div className='product-card'>
    <img src={props.img} alt="PS5" className='product-image'></img>
    <div className='Product-info'>
    <h3>{props.name}</h3>
    <p>£ {props.price}</p>
    <p>{props.stock}</p></div>
    <button type='button' className='btn'>Add to basket</button>
    </div></Link></div> 


    )
}
export default ProductCard

