
import { FETCH_MALE_USER_REQUEST, FETCH_MALE_USER_SUCCESS, FETCH_MALE_USER_FAIL, FETCH_FEMALE_USER_REQUEST, FETCH_FEMALE_USER_SUCCESS, FETCH_FEMALE_USER_FAIL, ADD_TO_CARD, DELETE_FROM_CARD } from '../constants';


const initialState = {
    userData: [],
    showLoader: false,
    error: null,
    cardData: [],

}


const reducerFn = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case FETCH_MALE_USER_REQUEST:
            return { ...state, showLoader: true };
        case FETCH_MALE_USER_FAIL:
            return { ...state, showLoader: false, error: payload.error };
        case FETCH_MALE_USER_SUCCESS:
            return { ...state, userData: payload.userData, showLoader: false, error: null };
        case FETCH_FEMALE_USER_REQUEST:
            return { ...state, showLoader: true };
        case FETCH_FEMALE_USER_FAIL:
            return { ...state, showLoader: false, error: payload.error };
        case FETCH_FEMALE_USER_SUCCESS:
            return { ...state, userData: payload.userData, showLoader: false, error: null };
        case ADD_TO_CARD:
            return { ...state, cardData: payload.cardData }
        case DELETE_FROM_CARD:
            return { ...state, cardData: payload.cardData }

        default: return { ...state }
    }
}

export { reducerFn };