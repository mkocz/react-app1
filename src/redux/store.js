import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

export const addList = payload => ({ type: 'ADD_LIST', payload });

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updateSearchString = payload => ({ type: 'UPDATE_SEARCH_STRING', payload })

export const getListById = ({ lists }, listId) => {
    return lists.filter(list => list.id === listId)
};

export const getColumnsByList = ({ columns }, listId) => {
    return columns.filter(column => column.listId === listId)
};

export const getFilteredCards = ({ cards, searchString }, columnId) => {
    return cards.filter(card => card.columnId === columnId && strContains(card.title, searchString))
};

export const getAllLists = state => state.lists;

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_LIST": return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }] }
        case "ADD_COLUMN": return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] }
        case "ADD_CARD": return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] }
        case "UPDATE_SEARCH_STRING": return { ...state, ...action.payload }
        default: return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
