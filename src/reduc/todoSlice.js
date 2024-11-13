import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log("state", state);
            console.log("action", action);
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        editTask: (state, action) => {
            console.log("state", state);
            console.log("action", action);
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
            console.log("state1", state);
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        clearTodo: (state) => {
            state.tasks = null;
        },
    },
});

export const { addTask, deleteTask, editTask, toggleTask, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
