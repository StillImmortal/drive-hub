import { configureStore } from "@reduxjs/toolkit"
import carReducer from "@/lib/redux/carSlice"

export const store = configureStore({
  reducer: {
    carReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


