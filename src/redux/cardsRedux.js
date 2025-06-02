import shortid from "shortid";
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) => {
    return cards.filter(card => card.columnId === columnId && strContains(card.title, searchString))
};

export const getFavoriteCards = ({ cards }) => {
    return cards.filter(card => card.isFavorite === true)
};

const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

export const toggleFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload })
export const addCard = payload => ({ type: ADD_CARD, payload });
const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        default:
            return statePart;
    }
}

export default cardsReducer;