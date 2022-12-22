

export const addTodoAction = (data) => {
    return {
        type: 'add',
        payload: data
    }
}

export const deleteTodoAction = (data) => {
    return {type: 'todos/todoDeleted', payload: data}
}

