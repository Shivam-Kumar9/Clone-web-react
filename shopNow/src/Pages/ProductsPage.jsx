import useFetchProducts from '../hooks/usefetch'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
// import Items from '../Components/card/items'
import { useState } from 'react'
import ProductList from '../Components/Products/ProductList'
import Pagination from '../Components/Pagination/Pagination'

let URL = 'https://dummyjson.com/products?limit=200' 
let url = "https://fakestoreapi.com/products"

function Products() {
    
    const {fetchData, loading, error} = useFetchProducts(URL)
    const [currentPage, setCurrentPage] = useState(0) 
    
    let itemLimit = 20
    let totalPages = Math.ceil(fetchData.length/itemLimit)

    const start =  currentPage * itemLimit
    const end   =  start + itemLimit 
    const currentItems = fetchData.slice(start,end)
    
   
  return (
    <>
     <Navbar/>
     <div>Products</div>
 
     <ProductList products={currentItems}/>
     <Pagination   currentPageState={{currentPage, setCurrentPage}} totalPages={totalPages} onPageChange={setCurrentPage}/>
      
     {/* <Items/> */}
     <Footer/>
    </>
  )
}
export default Products