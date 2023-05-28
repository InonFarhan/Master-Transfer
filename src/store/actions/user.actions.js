import { userService } from "../../services/user.service"
import { SET_USER } from "../reducers/user.reducer"
import { SET_CONTACTS } from "../reducers/user.reducer"
import { SET_FILTER_BY } from "../reducers/user.reducer"

export function setFilterBy(filterBy) {
    return (dispatch) => {
        try {
            dispatch({ type: SET_FILTER_BY, filterBy })
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function addMove(contact, amount) {
    return (dispatch) => {
        try {
            const user = userService.addMove(contact, amount)
            const action = {
                type: SET_USER,
                user
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function loadUser() {
    return (dispatch) => {
        try {
            const user = userService.getLoggedinUser()
            const action = {
                type: SET_USER,
                user
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function loadContacts() {
    return async (dispatch, getState) => {
        try {
            const contacts = await userService.getContacts(getState().userModule.filterBy)
            const action = {
                type: SET_CONTACTS,
                contacts
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function saveUser(userToUpdate) {
    return async (dispatch) => {
        try {
            const user = await userService.saveUser(userToUpdate)
            const action = {
                type: SET_USER,
                user
            }
            dispatch(action)
        }
        catch (error) {
            console.log('error:', error)
        }
    }
}

export function login(userToCheck) {
    return async (dispatch) => {
        try {
            const user = await userService.login(userToCheck)
            const action = {
                type: SET_USER,
                user
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function logout() {
    return (dispatch) => {
        try {
            const user = userService.logout()
            const action = {
                type: SET_USER,
                user
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function signUp(userToSignUp) {
    return async (dispatch) => {
        try {
            const user = await userService.signUp(userToSignUp)
            const action = {
                type: SET_USER,
                user
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}