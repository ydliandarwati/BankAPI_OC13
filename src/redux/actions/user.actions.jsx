import { GET_USERPROFILE, EDIT_FIRSTNAME, EDIT_LASTNAME } from "./type.actions";

/* User data recovery action */
export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

/* Username update action */
export const updateFirstName = (firstname) => {
    return {
        type: EDIT_FIRSTNAME,
        payload: firstname,
    }
}

export const updateLastName = (lastname) => {
    return {
        type: EDIT_LASTNAME,
        payload: lastname,
    }
}