export const SET_MOVES = 'SET_MOVES'
export const SET_PENDING_MOVES = 'SET_PENDING_MOVES'

const INITIAL_STATE = {
    moves: [],
    pendingMoves: []
}

export function movesReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case SET_MOVES:
            return {
                ...state,
                moves: action.moves
            }
        case SET_PENDING_MOVES:
            return {
                ...state,
                pendingMoves: action.pendingMoves
            }
        default:
            return state;
    }
}