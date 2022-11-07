import { configureStore, } from '@reduxjs/toolkit';

import counterSlice, { } from './redux-toolkit/counterSlice';


// })
const store = configureStore({
    reducer: {
        counter12: counterSlice,
        global: globalSlice,
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