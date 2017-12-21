
export function addUser() {
    return {
        type: "EDIT_USER"
    }
}

export function editInput(text) {
    return {
        type: "EDIT_INPUT_USER",
        payload: {
            input: text
        }
    }
}

export function removeUser(id) {
    return {
        type: "REMOVE_USER",
        payload: {
            index: id
        }
    }
}