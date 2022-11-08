import { configureStore, } from '@reduxjs/toolkit';

import reduxSlice, { } from './reduxSlice';


const store = configureStore({
    reducer: {
        signPage: reduxSlice
    },
})
export default store;