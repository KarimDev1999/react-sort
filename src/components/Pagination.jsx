import React, { useState } from 'react'

function Pagination({ workers, workersPerPage, handlePageChange, currentPage }) {
    const pageNumbers = [];
    const [pagesToShow] = useState(10);
    const [pageNumberPortion, setPageNumberPortion] = useState(1);

    let lastNumber = (pagesToShow * pageNumberPortion) + 1;
    let firstNumber = (lastNumber - pagesToShow);

    for (let i = 0; i <= Math.ceil(workers.length / workersPerPage); i++) {
        pageNumbers.push(i)
    };



    let newArr = pageNumbers.slice(firstNumber, lastNumber);


    console.log(firstNumber, lastNumber)

    const onNext = () => {
        if (lastNumber !== pageNumbers.length) {
            const nextPortion = pageNumberPortion + 1;
            setPageNumberPortion(nextPortion);
        }




    }
    const onPrev = () => {
        if (pageNumberPortion === 1) {
            return;
        }
        else {
            setPageNumberPortion(pageNumberPortion - 1)
            console.log(firstNumber);
        }
    }

    return (
        <nav className='pagination'>
            <button className='btn btn-outline-secondary' onClick={onPrev} >prev</button>
            <ul>
                {newArr.map(number => <li key={number}><a onClick={() => handlePageChange(number)}>{number}</a></li>)}
            </ul>
            <button className='btn btn-outline-secondary' onClick={onNext}>next</button>
        </nav>
    )
}

export default Pagination
