//Reducer's File



import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
    // {id:1,text:"Your Todo's"}
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            // const todo = {
            //     id : nanoid(),
            //     text : action.payload}

            state.todos.push({
                id : nanoid(),
                text : action.payload
            })
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer