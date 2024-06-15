import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1,text:"Hello World!"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            state.todos.push({
                id : nanoid(),
                text : action.payload
            })
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== state.todos.length - 1)
        }
    }
})