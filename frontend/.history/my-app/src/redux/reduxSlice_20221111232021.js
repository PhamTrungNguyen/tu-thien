import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({
    name: "reduxSlice",
    initialState: {
        image_url: "",
    },
    reducers: {
        getImageURL: (state, payload) =>
        ({
            ...state,
            image_url: payload.payload,
        }),
    },
});
export const { getDataURL } = reduxSlice.actions;

export default reduxSlice.reducer;
