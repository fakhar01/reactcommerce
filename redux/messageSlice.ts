import { createSlice } from "@reduxjs/toolkit";

type MessageState ={
    text : string | null;
};

const initialState: MessageState = {
    text: null,
};

const MessageSlice =createSlice({
    name:"message",
    initialState,
    reducers : {
        showMessage:(state, action)=>{
            state.text = action.payload
        },
        clearMessage : (state)=>{
            state.text = null;
        },
    },
});

export const {showMessage, clearMessage} = MessageSlice.actions;
export default MessageSlice.reducer;