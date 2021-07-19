import { createStore} from 'redux';

const initialState = {
    groceries: [],
    view: ''
};
const store = createStore((state = initialState, action) => {
    if(action.type === 'LOAD'){
        state = {...state, groceries: action.groceries}
    }

    if(action.type==='UPDATE'){
        state = {...state, groceries: state.groceries.map(grocery => grocery.id===action.grocery.id ? action.grocery : grocery)};
    }


)