import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({
    name: "reduxSlice",
    initialState: {
        data_url: "",
    },
    reducers: {
        getUserLogin: (state, payload) =>
        ({
            ...state,
            data_url: payload.payload,
        }),
    },
});
export const { getUserLogin } = reduxSlice.actions;

export default reduxSlice.reducer;
