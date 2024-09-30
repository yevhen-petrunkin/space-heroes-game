import { configureStore } from '@reduxjs/toolkit';

import battlefieldReducer from '@/game-engine/redux/redux-slices/battlefield-slice/battlefieldSlice';

export const store = configureStore({
    reducer: {
        battleField: battlefieldReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
