import { configureStore, } from '@reduxjs/toolkit';

import reduxSlice, { } from './reduxSlice';


const store = configureStore({
    reducer: {
        redux: reduxSlice
    },
})
export default store;