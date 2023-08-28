import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer: {
    
  }
})

export type rootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector