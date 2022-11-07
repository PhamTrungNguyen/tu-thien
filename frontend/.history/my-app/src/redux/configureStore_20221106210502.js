import { configureStore, } from '@reduxjs/toolkit';

import signPageSlice, { } from './signPageSlice';


const store = configureStore({
    reducer: {
        signPage: signPageSlice
    },
})
export default store;