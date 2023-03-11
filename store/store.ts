'use client'

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import moviesSlice from "./slices/moviesSlice"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favouritesMovies', 'favouritesId', 'movieById', 'isPageNumChanged']
}

const persistedReducer = persistReducer(persistConfig, moviesSlice)

const rootReducer = combineReducers({
  persistedReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

