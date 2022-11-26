import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({
    name: "reduxSlice",
    initialState: {
        image_url: "",
        money: ""
    },
    reducers: {
        getImageURL: (state, payload) =>
        ({
            ...state,
            image_url: payload.payload,
        }),
        getMoney: (state, payload) =>
        ({
            ...state,
            money: payload.payload,
        }),
    },
});
export const { getImageURL } = reduxSlice.actions;

export default reduxSlice.reducer;
