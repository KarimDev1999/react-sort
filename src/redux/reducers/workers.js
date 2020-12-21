const initialState = {
    items: [],
    loading: false,
    sort: '',
    row: null,

}


const workers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WORKERS':
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case 'SET_SORT':
            return {
                ...state,
                sort: action.payload
            }
        case 'SET_SORTED_DATA':
            return {
                ...state,
                items: action.payload
            }
        case 'SET_ROW_DATA':
            return {
                ...state,
                row: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }

        default: return state;

    }


}


export default workers;