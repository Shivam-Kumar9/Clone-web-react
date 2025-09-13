import useFetchProducts from '../hooks/usefetch'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Items from '../Components/card/items'
import { useState } from 'react'
import ProductList from '../Components/Products/ProductList'
import Pagination from '../Components/Products/Pagination'

function Products() {
    
    const {fetchData, loading, error} = useFetchProducts("https://fakestoreapi.com/products")
    const [currentPage, setCurrentPage] = useState(0) 
    
    let itemLimit = 10
    let totalPages = Math.ceil(fetchData.length/itemLimit)

    const start =  currentPage * itemLimit
    const end   =  start + itemLimit 
    const currentItems = fetchData.slice(start,end)


  return (
    <>
     <Navbar/>
     <div>Products</div>
 
     <ProductList products={currentItems}/>
     <Pagination   currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
      
     {/* <Items/> */}
     <Footer/>
    </>
  )
}

export default Products