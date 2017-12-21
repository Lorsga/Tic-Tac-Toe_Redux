export default function reducer(state = {
    user: {
        name: []
    },
    input: null
}, action) {
    switch (action.type) {
        case "EDIT_USER":
            state = {
                ...state,
                user: {
                    name: state.user.name.concat(state.input)
                }
            }
            break;
        case "EDIT_INPUT_USER":
            state = {
                ...state,
                input: action.payload.input
            }
            break;

        case "REMOVE_USER":
            state = {
                ...state,
                name: state.user.name.splice(action.payload.index, 1)
            }
            break;
        default:
            break;


    }
    return state;
}