import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    selectedTilesX: number[],
    selectedTilesY: number[],
}

const initialState: AppState = {
    selectedTilesX: [],
    selectedTilesY: [],

}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

        setSelectedTilesX: (state, action: PayloadAction<number[]>) => {
            state.selectedTilesX = action.payload
        },
        setSelectedTilesY: (state, action: PayloadAction<number[]>) => {
            state.selectedTilesY = action.payload
        }
    }
})

export const {
    setSelectedTilesX,
    setSelectedTilesY,
} = appSlice.actions;

export default appSlice.reducer;