import { FETCH_MALE_USER_REQUEST, FETCH_MALE_USER_SUCCESS, FETCH_MALE_USER_FAIL, FETCH_FEMALE_USER_REQUEST, FETCH_FEMALE_USER_SUCCESS, FETCH_FEMALE_USER_FAIL, ADD_TO_CARD, DELETE_FROM_CARD } from '../constants';


const getMaleUserRequest = () => {
    return {
        type: FETCH_MALE_USER_REQUEST,
        payload: {
        }
    }
}

const getMaleUserSuccess = (users) => {
    return {
        type: FETCH_MALE_USER_SUCCESS,
        payload: {
            userData: users,
            showLoader: false
        }
    }
}

const getMaleUserFail = (error) => {
    return {
        type: FETCH_MALE_USER_FAIL,
        payload: {
            error: error,
            showLoader: false
        }
    }
}

const getFeMaleUserRequest = () => {
    return {
        type: FETCH_FEMALE_USER_REQUEST,
        payload: {
        }
    }
}

const getFeMaleUserSuccess = (users) => {
    return {
        type: FETCH_FEMALE_USER_SUCCESS,
        payload: {
            userData: users,
            showLoader: false
        }
    }
}

const getFeMaleUserFail = (error) => {
    return {
        type: FETCH_FEMALE_USER_FAIL,
        payload: {
            error: error,
            showLoader: false
        }
    }
}

const addToCard = (cardData) => {
    return {
        type: ADD_TO_CARD,
        payload: {
            cardData
        }
    }
}

const deleteFromCard = (cardData) => {
    return {
        type: DELETE_FROM_CARD,
        payload: {
            cardData
        }
    }
}


export { getMaleUserRequest, getMaleUserSuccess, getMaleUserFail, getFeMaleUserRequest, getFeMaleUserSuccess, getFeMaleUserFail, addToCard, deleteFromCard }