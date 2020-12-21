import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, WorkerList, MyLoader, Info, Pagination } from './components';
import { HashRouter, Route } from 'react-router-dom';
import { setSort, setSortedData, setRowData, fetchWorkers } from './redux/actions/workers';
import './App.css';
import _ from 'lodash'



function App() {

  const workers = useSelector(({ workers }) => workers.items);
  const sort = useSelector(({ workers }) => workers.sort);
  const rowData = useSelector(({ workers }) => workers.row);
  const loading = useSelector(({ workers }) => workers.loading);
  const [workersPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const indexOfLastWorker = workersPerPage * currentPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workers.slice(indexOfFirstWorker, indexOfLastWorker);



  const handlePageChange = (number) => {
    setCurrentPage(number);

  }

  useEffect(() => {
    dispatch(fetchWorkers())
  }, []);


  const onSort = (field) => {
    const clonedData = workers.concat();
    const sortType = sort === 'asc' ? 'desc' : 'asc'
    dispatch(setSort(sortType));
    dispatch(setSortedData(_.orderBy(clonedData, field, sortType)));

  }

  const onRowSelect = (worker) => {
    dispatch(setRowData(worker));
  }


  return (
    <HashRouter>
      <Header />
      <div className='container'>

        <Route exact path='/' render={() => <WorkerList currentPage={currentPage} handlePageChange={handlePageChange} workersPerPage={workersPerPage} Pagination={Pagination} workers={workers} currentWorkers={currentWorkers} onSort={onSort} sort={sort} onRowSelect={onRowSelect} rowData={rowData} loading={loading} MyLoader={MyLoader} />} />
        <Route path='/info' render={() => <Info />} />
      </div>
    </HashRouter>
  );

}

export default App;
