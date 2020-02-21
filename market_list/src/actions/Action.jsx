export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const USER_CONNECT = "USER_CONNECT";
export const USER_DECONNECTION = "USER_DECONNECTION";
export const SET_MARKET_LIST = "SET_MARKET_LIST";
export const CLEAR_LIST = "CLEAR_LIST"

export function addIngredient(ingredient) {
    return { type: ADD_INGREDIENT, value: ingredient }
}
export function removeIngredient(index) {
    return { type: REMOVE_INGREDIENT, value: index }
}
export function userConnect(pseudo = "") {
    return { type: USER_CONNECT, value: pseudo }
}
export function userDeconnection(){
    return { type: USER_DECONNECTION, value: null }
}
export function setMarketList(marketList = []) {
    return { type: SET_MARKET_LIST, value: marketList }
}
export function clearList(){
    return{ type : CLEAR_LIST, value : null}
}