import { GrNext , GrPrevious } from "react-icons/gr";
import './Pagination.css'

function Pagination({totalPages, currentPageState, onPageChange}) {
     const {currentPage: page, setCurrentPage} = currentPageState
     
     const handlePageChange = (e) =>{
        const pageNumber = Number(e.target.innerText)-1
        setCurrentPage(pageNumber)
        onPageChange(pageNumber)
    }


  return (
     <div className='pagination'>
        {/* {JSON.stringify(totalPages)} */}
        <button className='page_nev prev' disabled={page==0 ? "disabled": null } onClick={() => setCurrentPage(page - 1)}><GrPrevious /></button>
         {[...Array(totalPages).keys()].map(num=>
      <div className={`pagination_btn ${page === num ? "Active" : ''}`} key={num} onClick={handlePageChange} >{num+1}</div>
         )}
        <button className='page_nev next'  disabled={page == totalPages-1?'yes' :null }  onClick={()=> setCurrentPage(page+1)}><GrNext /></button>
     </div>
  )
}

export default Pagination