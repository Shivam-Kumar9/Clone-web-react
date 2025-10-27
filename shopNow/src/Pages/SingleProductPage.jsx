import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function Product() {
  return (
    <>
      <Navbar />
      <div>Product</div>
      {/* useParams() से id लेना।
          API से उस product का detail fetch करना।
         "Add to Cart" → CartContext का function call करना। */}
      <Footer />
    </>
  );
}
