import { httpService } from "./http.service.js"

export const userService = {
    signUp,
    login,
    getLoggedinUser,
    getEmptyUser,
    logout,
    getContacts,
    updateUser,
    getUserById,
    saveUser,
    saveLocalUser
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const API = 'auth/'
const USER = 'user/'

async function getContacts(filterBy) {
    const users = await httpService.get(`user`)
    const user = getLoggedinUser()
    let contactsToReturn = users.filter(c => user.contacts.find(contact => {
        return contact.phone === c.phone
    }))
    if (contactsToReturn?.length) {
        if (filterBy && filterBy.term) {
            contactsToReturn = filter(contactsToReturn, filterBy.term)
        }
        return _sort(contactsToReturn)
    }
    return contactsToReturn
}

function getUserById(userId) {
    return httpService.get(USER + userId)
}

async function saveUser(user) {
    if (user._id) {
        const updatedUser = await userService.updateUser(user)
        return saveLocalUser(updatedUser)
    }
    const updatedUser = await _addContact(user)
    return updatedUser
}

async function updateUser(user) {
    const updatedUser = await httpService.put(USER + user._id, user)
    return updatedUser
}

async function _addContact(contact) {
    try {
        const loggedinUser = getLoggedinUser()
        const users = await httpService.get(`user`)
        const userToAdd = users.find(u => u.phone === contact.phone)
        const contactToAdd = {
            "_id": `${userToAdd._id}`,
            "username": `${userToAdd.username}`,
            "phone": `${userToAdd.phone}`,
        }
        loggedinUser.contacts.unshift(contactToAdd)
        const updatedUser = saveUser(loggedinUser)
        return updatedUser
    } catch (err) {
        console.error(err);
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function getEmptyUser() {
    return {
        username: '',
        password: '',
        email: '',
        phone: '',
        coins: 100,
        contacts: []
    }
}

function logout() {
    try {
        sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
        httpService.post(API + 'logout')
    }
    catch (err) {
        console.error(err);
    }
}

async function login(userToCheck) {
    const user = await httpService.post(API + 'login', userToCheck)
    if (user) return saveLocalUser(user)
}

async function signUp(user) {
    try {
        const registeredUser = await httpService.post(API + 'signup', user)
        return saveLocalUser(registeredUser)
    }
    catch (err) {
        console.error(err)
    }
}

function saveLocalUser(user) {
    const userToSave = {
        _id: user._id,
        username: user.username,
        coins: user.coins,
        contacts: user.contacts,
        email: user.email,
        phone: user.phone
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
    return user
}

function filter(contacts, term) {
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => {
        return contact.username.toLocaleLowerCase().includes(term) ||
            contact.phone.toLocaleLowerCase().includes(term) ||
            contact.email.toLocaleLowerCase().includes(term)
    })
}

function _sort(arr) {
    return arr.sort((a, b) => {
        if (a.username.toLocaleLowerCase() < b.username.toLocaleLowerCase()) {
            return -1;
        }
        if (a.username.toLocaleLowerCase() > b.username.toLocaleLowerCase()) {
            return 1;
        }
        return 0;
    })
}