import React,{ useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../store/AuthContext'
import { Circles } from 'react-loader-spinner'
import Pegination from '../components/auth/Pegination'

const TableCars = ({ data,flag }) => {

    const [ state, dispatch ] = useContext(AuthContext)
    const userId = state.username.id
    
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ postsPerPage, setPostsPerPage] = useState(5)
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
        const currentPost = data.slice(firstPostIndex,lastPostIndex)
        console.log(currentPost,flag);


  return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr className='text-center'>
                        <th colSpan='5'>{flag === 'myCar' ? 'My Cars' : 'All Cars Info Except Mine'}</th>
                    </tr>
                    <tr>
                        <th scope="col">Car</th>
                        <th scope="col">Model</th>
                        <th scope="col">Owned By</th>
                        <th scope="col">Details</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.isLoading ? <tr><td colSpan={5}>
                                            <Circles height="80" width="80" radius="9" color="green" ariaLabel="loading" />
                                        </td></tr>
                                     : currentPost.map(
                            (d,i) => {
                                return flag === 'myCar' ? <tr key={i}>
                                    <td> {d.brandName}</td>
                                    <td> {d.model}</td>
                                    <td> {state.username.name}</td>
                                    <td><Link to={`/details/${userId}/${d._id}`} className='btn btn-success'>Details</Link></td>
                                    <td><Link to={`/editCar/${userId}/${d._id}`} className='btn btn-warning'>Edit</Link></td>
                                </tr> : d.cars.map( (c,j)=>{
                                    return d.name !== state.username.name && <tr key={j}>
                                    <td> {c.brandName}</td>
                                    <td> {c.model}</td>
                                    <td> {d.name}</td>
                                    <td><Link to={`/details/${d._id}/${c._id}`} className='btn btn-success'>Details</Link></td>
                                    <td><Link to={`/editCar/${d._id}/${c._id}`} className='btn btn-warning'>Edit</Link></td>
                                </tr> 
                                })
                            }
                        )
                    }
                    
                </tbody>
            </table>
            {
                flag === 'myCar' ? <Pegination totalPosts={data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
                : ''
            }
            
        </div>
  )
}

export default TableCars