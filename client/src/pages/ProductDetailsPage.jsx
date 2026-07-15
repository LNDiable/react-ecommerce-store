import { useParams } from 'react-router-dom';
import productsData from '../data/products.js';
import "../styles/productDetailsPage.css";

function ProductDetailsPage() {
  const {id} = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));

      if (!product) {
      return <p>Product not found</p>;}

      return (
      <div className="product-details-page">


      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>Price: £{product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>{product.description}</p>

      </div>

      )}

export default ProductDetailsPage;