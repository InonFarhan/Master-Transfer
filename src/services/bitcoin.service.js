import { storageService } from './storage.service.js'
import { userService } from "../services/user.service"
import axios from 'axios'

export const bitcoinService = {
    getRate,
}

const STORAGE_KEY = 'rate'
let gRate

_loadRate()

function getRate() {
    const user = userService.getLoggedinUser()
    return user.coins * gRate?.rate
}

async function _loadRate() {
    gRate = storageService.load(STORAGE_KEY)
    if (!gRate || !gRate.rate || +gRate.date - Date.now() > 1000 * 60 * 60 * 24) {
        const rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        gRate = {
            rate: rate.data,
            date: Date.now()
        }
        storageService.store(STORAGE_KEY, gRate)
    }
    return gRate
}