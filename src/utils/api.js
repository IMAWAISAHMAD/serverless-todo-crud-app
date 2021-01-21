export const createTodo = (data) => {
return fetch('/.netlify/functions/todo-create', {
    body: JSON.stringify(data),
    method: 'POST'
}).then(response => {
    return response.json()
})
}

export const readAll = () => {
return fetch('/.netlify/functions/todo-read-all').then((response) => {
    return response.json()
})
}

export const update = (todoId, data) => {
return fetch(`/.netlify/functions/todo-update/${todoId}`, {
    body: JSON.stringify(data),
    method: 'POST'
}).then(response => {
    return response.json()
})
}

export const deleteTodo = (todoId) => {
return fetch(`/.netlify/functions/todo-delete/${todoId}`, {
    method: 'POST',
}).then(response => {
    return response.json()
})
}

export const batchDeleteTodo = (todoIds) => {
return fetch(`/.netlify/functions/todo-delete-all`, {
    body: JSON.stringify({
    ids: todoIds
    }),
    method: 'POST'
}).then(response => {
    return response.json()
})
}
  