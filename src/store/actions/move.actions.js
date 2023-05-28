import { moveService } from "../../services/move.service"
import { SET_MOVES } from "../reducers/move.reducer"
import { SET_PENDING_MOVES } from "../reducers/move.reducer"

export function addMove(contact, transfer) {
    return async (dispatch) => {
        try {
            const updatedContact = await moveService.addMove(contact, transfer)
            dispatch(loadMoves(updatedContact))
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function updateMove(moveToUpdate, type) {
    return async (dispatch, getState) => {
        try {
            await moveService.updateMove(getState().userModule.loggedInUser, moveToUpdate, type)
            dispatch(loadPendingMoves())
        }
        catch (error) {
            console.log('error:', error)
        }
    }
}

export function loadMoves(contact = {}) {
    return async (dispatch, getState) => {
        try {
            const moves = await moveService.getMoves({ loggedInUser: getState().userModule.loggedInUser, contact })
            const action = {
                type: SET_MOVES,
                moves
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function loadPendingMoves() {
    return async (dispatch, getState) => {
        try {
            const pendingMoves = await moveService.getMoves({ to: getState().userModule.loggedInUser, status: 'Pending' })
            const action = {
                type: SET_PENDING_MOVES,
                pendingMoves
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}