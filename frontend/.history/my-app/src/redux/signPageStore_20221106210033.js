import { configureStore, } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        signPage: signPageSlice
    },
    // middleware: (gDM) => gDM().concat(logger, sagaMiddleware)
})
// store.subscribe(() => {
//     console.log(`current state: ${store.getState().counter.count}`);
// })
// store.dispatch(incrementByValue(1))
// store.dispatch(incrementByValue(2))
// store.dispatch(incrementByValue(3))

// sagaMiddleware.run()
export default store;