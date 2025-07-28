let initalstate = {
    user: [],
    login: [],
    student: [],
}

let crudreducer = (state = initalstate, action) => {
    switch (action.type) {
        case "Add_Student":
            let data = [...state.user, action.payload]
            return {
                ...state,
                user: data
            }
            

        case "login_user":
            
            return {
                ...state,
                login: action.payload

            }

        case "Add":
            let oldrecord = [...state.student, action.payload]

            return {
                ...state,
                student: oldrecord
            }
        case 'viewuser':
            return {
                ...state,
                student: action.payload,
            }
        case 'deleteuser':
            let deleteuser = state.student.filter(val => val.id != action.payload.id)
            return {
                ...state,
                student: deleteuser
            }
        case 'edituser':

            let single = state.student.find(val => val.id == action.payload.id)
            return {
                ...state,
                single: single
            }

        case "UPDATE_USER":
            const updatedList = state.student.map((val) =>
                val.id === action.payload.id ? action.payload : val
            );
            return {
                ...state,
                student: updatedList,
            };


        default:
            return state
    }
}
export default crudreducer