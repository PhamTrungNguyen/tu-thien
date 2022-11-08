import { createSlice } from "@reduxjs/toolkit";

const signPageSlice = createSlice({
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
export const { getUserLogin } = signPageSlice.actions;

export default signPageSlice.reducer;
