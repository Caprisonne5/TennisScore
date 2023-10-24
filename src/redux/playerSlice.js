import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        "player1": undefined,
        "player2": undefined
    },
    reducers: {
        addPlayer1ToState: (state, action) => {
            state.player1 = action.payload.player1;
        },
        addPlayer2ToState:(state, action) => {
            state.player2 = action.payload.player2;
        }
    }

});

export const { addPlayer2ToState, addPlayer1ToState } = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
