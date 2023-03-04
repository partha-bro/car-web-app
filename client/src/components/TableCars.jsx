import React from 'react'

const TableCars = ({ data,loading,flag }) => {
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
                        loading ? <tr><td className='text-danger'><h2>Loading...</h2></td></tr> : data.map(
                            (d,i) => {
                                return flag === 'myCar' ? <tr key={i}>
                                    <td> {d.brandName}</td>
                                    <td> {d.model}</td>
                                    <td> -</td>
                                    <td><button className='btn btn-success'>Details</button></td>
                                    <td><button className='btn btn-warning'>Edit</button></td>
                                </tr> : d.cars.map( (c,j)=><tr key={j}>
                                    <td> {c.brandName}</td>
                                    <td> {c.model}</td>
                                    <td> {d.name}</td>
                                    <td><button className='btn btn-success'>Details</button></td>
                                    <td><button className='btn btn-warning'>Edit</button></td>
                                </tr>)
                            }
                        )
                    }
                    
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default TableCars