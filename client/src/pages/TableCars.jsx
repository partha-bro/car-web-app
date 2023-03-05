import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../store/AuthContext'
import { Circles } from 'react-loader-spinner'

const TableCars = ({ data,flag }) => {

    const [ state, dispatch ] = useContext(AuthContext)

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
                                     : data.map(
                            (d,i) => {
                                return flag === 'myCar' ? <tr key={i}>
                                    <td> {d.brandName}</td>
                                    <td> {d.model}</td>
                                    <td> {state.username}</td>
                                    <td><Link to={`/details/${d._id}`} className='btn btn-success'>Details</Link></td>
                                    <td><button className='btn btn-warning'>Edit</button></td>
                                </tr> : d.cars.map( (c,j)=>{
                                    return d.name !== state.username && <tr key={j}>
                                    <td> {c.brandName}</td>
                                    <td> {c.model}</td>
                                    <td> {d.name}</td>
                                    <td><Link to={`/details/${c._id}`} className='btn btn-success'>Details</Link></td>
                                    <td><button className='btn btn-warning'>Edit</button></td>
                                </tr> 
                                })
                            }
                        )
                    }
                    
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                    </li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="#">Next</Link>
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default TableCars