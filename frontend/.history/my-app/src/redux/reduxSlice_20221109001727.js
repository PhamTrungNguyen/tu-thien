import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({
    name: "reduxSlice",
    initialState: {
        data_url: "",
    },
    reducers: {
        getDataURL: (state, payload) =>
        ({
            ...state,
            data_url: payload.payload,
        }),
    },
});
export const { getDataURL } = reduxSlice.actions;

export default reduxSlice.reducer;
