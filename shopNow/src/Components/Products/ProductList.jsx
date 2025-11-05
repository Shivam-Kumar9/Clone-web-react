import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  // console.log(products[0]);
  return (
  <div className="product-list">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
            tags={product.tags}
            images={product.images}
            thumbnail={product.thumbnail || product.images?.[0]} // Fallback for image
          />
        ))
      ) : (
        <p>No products available</p> // Inline fallback, or use CSS pseudo-element
      )}
    </div>
  );
}  

export default ProductList;

/*
 "id": 1,
 "title": "Essence Mascara Lash Princess",

 "price": 9.99,
 "discountPercentage": 10.48,

 "rating": 2.56,

 "tags": ["beauty","mascara"],


 "images": [
"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
],
"thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
},

*/
