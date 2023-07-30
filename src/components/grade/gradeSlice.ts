import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
export interface CounterState {
  data : [],
  total_score : Number,
  total_credit : Number,
  grade: Number,
}

const initialState: CounterState = {
  data : [],
  total_score : 0,
  total_credit : 0,
  grade:0,
}

export const gradeSlice = createSlice({
  name: "grade",
  initialState,
  reducers: {
    addGrade: (state, action: PayloadAction) => {
      
      state.data.push(action.payload)
      state.total_score += parseFloat(action.payload.credit) * parseFloat(action.payload.value)
      state.total_credit += parseFloat(action.payload.credit)
      state.grade = (state.total_score / state.total_credit).toFixed(2);
    },
    updateGrade:(state, action: PayloadAction) => {
      state.data = action.payload
      state.total_score  = 0;
      state.total_credit = 0;
      action.payload.map(item=> {
        state.total_score += parseFloat(item.credit) * parseFloat(item.value)
        state.total_credit += parseFloat(item.credit);
      });

      state.grade = (state.total_score / state.total_credit).toFixed(2);
    }
  }
})

export const { addGrade, updateGrade } = gradeSlice.actions
export const tmpData = (state: RootState) => state.grade
export default gradeSlice.reducer
