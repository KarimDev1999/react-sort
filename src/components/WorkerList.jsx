import React from 'react'

function WorkerList({ currentWorkers, onSort, onRowSelect, rowData, loading, MyLoader, workers, Pagination, workersPerPage, handlePageChange, currentPage }) {



    return (
        <div className='workers'>


            {rowData &&

                <div className='workers__info'>
                    <h1 className='title'>Информация о работнике</h1>
                    <ul>
                        <li>
                            <span className='bold'>ID:</span>  {rowData.id}
                        </li>
                        <li>
                            <span className='bold'> Firstname: </span> {rowData.firstName}
                        </li>
                        <li>
                            <span className='bold'> Lastname: </span>  {rowData.lastName}
                        </li>
                        <li>
                            <span className='bold'> description: </span>  {rowData.description}
                        </li>
                    </ul>
                </div>
            }

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th onClick={(e) => onSort('id')}>ID</th>
                        <th onClick={(e) => onSort('firstName')}>firstName</th>
                        <th onClick={(e) => onSort('lastName')}>lastName</th>
                        <th onClick={(e) => onSort('email')}>email</th>
                        <th onClick={(e) => onSort('phone')}>phone</th>

                    </tr>
                </thead>
                <tbody>

                    {!loading ?
                        currentWorkers.map(worker => <tr key={worker.id + worker.phone} onClick={() => onRowSelect(worker)}>
                            <td>{worker.id}</td>
                            <td>{worker.firstName}</td>
                            <td>{worker.lastName}</td>
                            <td>{worker.email}</td>
                            <td>{worker.phone}</td>
                        </tr>)
                        : <tr>
                            <MyLoader />
                        </tr>
                    }

                </tbody>
            </table>

            <Pagination handlePageChange={handlePageChange} workers={workers} workersPerPage={workersPerPage} currentPage={currentPage} />

        </div>
    )
}

export default WorkerList
