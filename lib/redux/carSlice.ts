import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/redux/store";

export interface CarSearchParams {
  manufacturer?: string
  model?: string
  fuel?: string
  year?: string
}

const initialState: CarSearchParams = {
  manufacturer: "",
  model: "",
  fuel: "gas",
  year: "",
}

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updateParams: (state, action: PayloadAction<CarSearchParams>) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { updateParams } = carSlice.actions
export const carSelector = (state: RootState) => state.carReducer
export default carSlice.reducer