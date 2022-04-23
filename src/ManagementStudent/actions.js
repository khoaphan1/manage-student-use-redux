import { SET_SUBNAME_INPUT, 
        SET_NAME_INPUT, 
        SET_PHONE_INPUT,
        SET_AGE_INPUT,
        SET_EMAIL_INPUT,
        SET_ADDRESS_INPUT,
        SET_SEX_INPUT,
        SET_FRAMEWORK_INPUT,
        SET_AVATA_INPUT,
        ADD_STUDENT,
        DELETE_STUDENT,
        EDIT_STUDENT
} from "./constant";

export const setAvataInput = payload => ({
    type: SET_AVATA_INPUT,
    payload
})

export const setSubnameInput = payload => ({
    type: SET_SUBNAME_INPUT,
    payload
})

export const setNameInput = payload => ({
    type: SET_NAME_INPUT,
    payload
})

export const setPhoneInput = payload => ({
    type: SET_PHONE_INPUT,
    payload
})

export const setAgeInput = payload => ({
    type: SET_AGE_INPUT,
    payload
})

export const setEmailInput = payload => ({
    type: SET_EMAIL_INPUT,
    payload
})

export const setAddressInput = payload => ({
    type: SET_ADDRESS_INPUT,
    payload
})

export const setSexInput = payload => ({
    type: SET_SEX_INPUT,
    payload
})

export const setFrameworkInput = payload => ({
    type: SET_FRAMEWORK_INPUT,
    payload
})


export const addStudent= payload => ({
    type: ADD_STUDENT,
    payload
})

export const deleteStudent = payload => ({
    type: DELETE_STUDENT,
    payload
})

export const editStudent = payload => ({
    type: EDIT_STUDENT,
    payload
})