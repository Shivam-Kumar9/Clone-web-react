import "./productcard.css";
import { useContext } from "react";
import { AuthData } from "../../Context/authContext"; // Assuming this context exists from previous components
import { CartContext } from "../../Context/CartContext";

function ProductCard({
  id,
  title,
  price,
  discountPercentage,
  rating,
  tags,
  images,
  thumbnail,
}) {
  const { userData, token, setUserData } = useContext(AuthData);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = {
      id,
      title,
      price,
      discountPercentage,
      rating,
      tags,
      images,
      thumbnail,
    };
    if (!token) {
      alert("Please log in to add items to cart");
      return;
    }
    addToCart({
      product
    });

 
  };

  const handleMoreInfo = () => {
    // For now, alert with more details; in a real app, navigate to /product/:id
    const details = `Title: ${title}\nPrice: $${price}\nDiscount: ${discountPercentage}%\nRating: ${rating}\nTags: ${tags.join(
      ", "
    )}\nImages: ${images?.length || 0}`;
    alert(details);
    console.log("More info for:", { title, images });
  };

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-thumbnail" />
      <div className="product-content">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">Price: ${price.toFixed(2)}</p>
        <p className="product-discount">Discount: {discountPercentage}%</p>
        <p className="product-rating">Rating: {rating} ★</p>
        <div className="product-tags">
          <span className="tags-label"></span>
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="product-actions">
          <button className="btn-add-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn-more-info" onClick={handleMoreInfo}>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// export default ProductCard
//           images={product.images}
//           thumbnail={product.thumbnail}}) {
//   return (
//     <div className='product_card'>

//     </div>

//     //"View Details" button → /products/:id link करेगा।
//   )
// }

//-------------------------

// const handleAddToCart = () => {
//   console.log(userData, token);
//   if (!token) {
//     alert('Please log in to add items to cart');
//     return;
//   }

//   const product = {id, title, price, discountPercentage, rating, tags, images, thumbnail };
//   // const loggedInUser = userData.find(user => (user.name === token));
//   const updatedUserData = userData.map(user => {
//     if (user.name === token){

//       return { ...user, cart: [...(user.cart || []), product] };
//     }
//     return user;
//   });
//   console.log(updatedUserData ,"cart");
//   setUserData(updatedUserData);
//   localStorage.setItem('userData', JSON.stringify(updatedUserData));
//   alert(`${title} added to cart!`);
// };
