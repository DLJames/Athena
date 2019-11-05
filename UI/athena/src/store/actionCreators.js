import * as Type from './actionTypes';

export const changeHeaderStatus = (value) => ({
    type: Type.CHANGE_HEADER_STATUS,
    value
});

export const getCurrentContact = () => ({
    type: Type.GET_CURRENT_CONTACT
});

export const setContactName = (value) => ({
    type: Type.SET_CONTACT_NAME,
    value
});

// export const searchContact = (value) => {
//     return (dispatch) => {
//         const action = setContactName(value);
//         dispatch(action);
//     };
// };
