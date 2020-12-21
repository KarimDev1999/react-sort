import axios from 'axios';

export const setWorkers = payload => ({
    type: 'SET_WORKERS',
    payload
});

export const setSort = payload => ({
    type: 'SET_SORT',
    payload,
})

export const setRowData = payload => ({
    type: 'SET_ROW_DATA',
    payload,
})

export const setSortedData = payload => ({
    type: 'SET_SORTED_DATA',
    payload
})

export const setLoading = payload => ({
    type: 'SET_LOADING',
    payload
})

export const fetchWorkers = () => dispatch => {
    dispatch(setLoading(true));
    axios.get(`https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`).then(({ data }) => {
        dispatch(setWorkers(data))
    })
}