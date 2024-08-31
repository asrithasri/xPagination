import React from 'react'

const Pagination = ({handlePrevious,currentPage,handleNext,totalPages}) => {

    
  return (
    <div className='pagination-container'>
        <button  onClick={handlePrevious} disabled={currentPage===1}>
            Previous
        </button>

        <span className='currentPage'>{currentPage}</span>
        <button onClick={handleNext} disabled={currentPage===totalPages}>
            Next
        </button>
    </div>
  )
}

export default Pagination;