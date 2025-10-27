
import './card.css'
const Card = ({product}) => {

    return(
       <div className="product-card">
      <figure className="product-image">
        <img src={product.image} alt={`Product: ${product.title}`} />
      </figure>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-rating">
          <span>★ {product.rating.rate}</span>
          <span>({product.rating.count} reviews)</span>
        </div>
        <button className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
    )
}

export default Card;