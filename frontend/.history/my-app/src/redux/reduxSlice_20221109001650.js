import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({
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
export const { getUserLogin } = reduxSlice.actions;

export default reduxSlice.reducer;
