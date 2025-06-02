const createActionName = actionName => `app/search/${actionName}`;
const UPDATE_SEARCH_STRING = createActionName('UPDATE_SEARCH_STRING');

export const updateSearchString = payload => ({ type: UPDATE_SEARCH_STRING, payload })
const searchStringReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCH_STRING:
            return action.payload
        default:
            return statePart;
    }
}

export default searchStringReducer