export const SET_USER = 'SET_USER'
export const SET_CONTACTS = 'SET_CONTACTS'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const INITIAL_STATE = {
    loggedInUser: null,
    contacts: [],
    filterBy: { term: '' }
}

export function userReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                loggedInUser: action.user
            }
        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.contacts
            }
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        default:
            return state;
    }
}