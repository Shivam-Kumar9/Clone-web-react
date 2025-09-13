import React from 'react'

function Pagination({totalPages, currentPage, onPageChange}) {
  
 
 

  return (
    <>
     <div>Pagination</div>
     {[...Array(totalPages).keys()].map(num)}
    </>
  )
}

export default Pagination