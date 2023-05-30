import { httpService } from "./http.service.js"
import { userService } from "../services/user.service"


export const moveService = {
    getMoves,
    addMove,
    updateMove
}

const MOVE = 'move/'

async function getMoves(filterBy) {
    return httpService.get('move', filterBy)
}

async function addMove(contact, transfer) {
    let move = _getEmptyMove()
    move.fromId = userService.getLoggedinUser()._id
    move.toId = contact._id
    move.to = contact.username
    move.at = Date.now()
    move.amount = transfer.amount
    move.title = transfer.title
    move.fromNumber = contact.phone
    await httpService.post('move', move)
    return contact
}

async function updateMove(user, move, type) {
    const receivingUser = user
    const sendingUser = userService.getUserById(move.fromId)
    if (type === 'approve') {
        move.status = 'Approved'
        sendingUser.coins -= +move.amount
        receivingUser.coins += +move.amount
        userService.updateUser(receivingUser)
        userService.updateUser(sendingUser)
        userService.saveLocalUser(receivingUser)
    } else move.status = 'rejected'
    return await saveMove(move)
}

async function saveMove(move) {
    const updatedMove = await httpService.put(MOVE + move._id, move)
    return updatedMove
}

function _getEmptyMove() {
    return {
        fromId: '',
        toId: '',
        to: '',
        at: '',
        amount: '',
        title: '',
        status: 'Pending',
    }
}