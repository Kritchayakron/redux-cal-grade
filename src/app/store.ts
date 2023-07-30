import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import gradeReducer from "../components/grade/gradeSlice"

export const store = configureStore({
  reducer: {
    grade: gradeReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
