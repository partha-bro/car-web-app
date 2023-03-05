import React from 'react'

const Pegination = ({totalPosts,postsPerPage,setCurrentPage}) => {
    let pages = []

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i)
    }
  return (
    <>
        <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {
                        pages.map( (page,index)=>{
                            return <li key={index} className="page-item">
                            <button className="page-link" onClick={()=>setCurrentPage(page)}>{page}</button>
                            </li>
                        })
                    }
                </ul>
            </nav>
    </>
  )
}

export default Pegination