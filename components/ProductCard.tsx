import { Product } from "@/types/product";

const ProductCard: React.FC<{ product: Product}> = ({ product }) => (
    <div className="border p-4">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    </div>
);

export default ProductCard;