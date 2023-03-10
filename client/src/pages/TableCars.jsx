import React,{ useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../store/AuthContext'
import { Circles } from 'react-loader-spinner'
import Pegination from '../components/auth/Pegination'

const TableCars = ({ data }) => {

    const [ state, dispatch ] = useContext(AuthContext)
    const userId = state.username.id
    
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ postsPerPage, setPostsPerPage] = useState(5)
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    data = data.filter(user=>user._id != userId)

    let totalPosts = 0
    let totalCars = []
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data[i].cars.length;j++){
            totalPosts++
            let car = data[i].cars[j]
            totalCars.push({...car,name:data[i].name,userId:data[i]._id})
        }
    }
    const currentPost = totalCars.slice(firstPostIndex,lastPostIndex)


  return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr className='text-center'>
                        <th colSpan='5'>'All Cars Info Except Mine'</th>
                    </tr>
                    <tr>
                        <th scope="col">Car</th>
                        <th scope="col">Model</th>
                        <th scope="col">Owned By</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.isLoading ? <tr><td colSpan={5}>
                                            <Circles height="80" width="80" radius="9" color="green" ariaLabel="loading" />
                                        </td></tr>
                                     : currentPost.map((d,i) => {
                                    return <tr key={i}>
                                    <td> {d.brandName}</td>
                                    <td> {d.model}</td>
                                    <td> {d.name}</td>
                                    <td><Link to={`/details/${d.userId}/${d._id}`} className='btn btn-success'>Details</Link></td>
                                </tr> 
                            }
                        )
                    }
                    
                </tbody>
            </table>
             <Pegination totalPosts={totalPosts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
            
        </div>
  )
}

export default TableCars