import ProductCard from "../components/ProductCard";
import product from "../data/products";

function ProductsPage() {
  return (
    <div className="wrapper">
      {product.map((product) => (
        <ProductCard
          key={product.id}
          img={product.image}
          name={product.name}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </div>
  );
}

export default ProductsPage;