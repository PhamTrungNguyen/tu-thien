import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "SignPage",
    initialState: {
        userLogin: "",
    },
    reducers: {
        getUserLogin: (state, payload) =>
        ({
            ...state,
            userLogin: payload.payload,
        }),
    },
});
export const { getUserLogin } = counterSlice.actions;

export default counterSlice.reducer;
