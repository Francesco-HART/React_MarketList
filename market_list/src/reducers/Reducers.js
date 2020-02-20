import * as actions from '../actions/Action';
import firebase from '../firebase';

const initialState = {
    pseudo: '',
    marketList: [],
    isConnected : false
};

export default function reducer(state = initialState, action) {
    let nextState;
    let itemRef = null;

    switch (action.type) {
        case actions.ADD_INGREDIENT:
            itemRef = firebase.database().ref(state.pseudo);
            nextState = {
                ...state,
                marketList: [...state.marketList, action.value]
            };
            itemRef.push(action.value);
            return nextState;

        case actions.REMOVE_INGREDIENT:
            itemRef = firebase.database().ref(state.pseudo);
            nextState = {
                ...state,
                marketList: state.marketList.filter((item, index) => index !== action.value)
            };
            itemRef.remove();
            for (let i = 0; i < nextState.marketList.length; i++) {
                itemRef.push(nextState.marketList[i]);
            }
            return nextState;

        case actions.USER_CONNECT:
             nextState = {
                ...state,
                pseudo: action.value,
                isConnected: true
            };
            return nextState;
        case actions.USER_DECONNECTION:
            nextState = {
                ...state,
                pseudo : '',
                isConnected: false
            };
            return nextState;
        case actions.SET_MARKET_LIST:
            nextState = {
                ...state,
                marketList: action.value
            };
            return nextState;
        default:
            return state;
    }
}
