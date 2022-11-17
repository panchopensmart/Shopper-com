import _paramsCard from './paramsCard.json'
const TIMEOUT = 100
export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(_paramsCard), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}