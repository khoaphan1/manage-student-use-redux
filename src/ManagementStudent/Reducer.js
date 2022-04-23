import { SET_SUBNAME_INPUT, 
    SET_NAME_INPUT, 
    SET_PHONE_INPUT,
    SET_AGE_INPUT,
    SET_EMAIL_INPUT,
    SET_ADDRESS_INPUT,
    SET_SEX_INPUT,
    SET_AVATA_INPUT,
    ADD_STUDENT,
    DELETE_STUDENT,
    EDIT_STUDENT,
    SET_FRAMEWORK_INPUT
} from "./constant";

const initState = {
    students: [],
    avataInput: [],
    subnameInput: '',
    nameInput: '',
    phoneInput: '',
    ageInput: '',
    emailInput: '',
    addressInput: '',
    sexInput: 1,
    frameworkInput: [],
}

function reducer(state, action){
    switch (action.type) {
        case SET_SUBNAME_INPUT:
            return {
                ...state,
                subnameInput: action.payload
            }
        case SET_AVATA_INPUT:
            return {
                ...state,
                avataInput: [...state.avataInput, action.payload]
            }
        case SET_NAME_INPUT:
            return {
                ...state,
                nameInput: action.payload
        }
        case SET_PHONE_INPUT:
            return {
                ...state,
                phoneInput: action.payload
            }
        case SET_AGE_INPUT:
            return {
                ...state,
                ageInput: action.payload
        }
        case SET_EMAIL_INPUT:
            return {
                ...state,
                emailInput: action.payload
            }
        case SET_ADDRESS_INPUT:
            return {
                ...state,
                addressInput: action.payload
        }
        case SET_SEX_INPUT:
            return {
                ...state,
                sexInput: action.payload
            }
        case SET_FRAMEWORK_INPUT:
            return {
                ...state,
                frameworkInput: action.payload
        }
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        case DELETE_STUDENT:
            const newStudents = [...state.students]
            newStudents.splice(action.payload,1)

            return{
                ...state,
                students : newStudents
            }
        case EDIT_STUDENT:
            const repStudents = [...state.students]
            repStudents[action.payload.stt] = action.payload.repStudents
            
            return {
                ...state,
                students :  repStudents
            }
        default:
            throw new Error('có lỗi')
    }
}

export { initState }
export default reducer