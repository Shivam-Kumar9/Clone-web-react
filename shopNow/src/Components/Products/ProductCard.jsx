

import React from 'react'

function ProductCard({ key, title, price, discountPercentage, rating, tags, images, thumbnail }) {
  return (
    <div className='product_card' key={key}>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Discount: {discountPercentage}%</p>
      <p>Rating: {rating}</p>
      <div>
        Tags: {tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
    </div>
  )
}

// export default ProductCard
//           images={product.images}
//           thumbnail={product.thumbnail}}) {
//   return (
//     <div className='product_card'>
   
//     </div>
    
//     //"View Details" button → /products/:id link करेगा।
//   )
// }

export default ProductCard