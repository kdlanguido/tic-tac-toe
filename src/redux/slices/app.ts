import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type tile = {
    tileKey: string;
    tileVal: string;
}

export interface AppState {
    board: tile[];
    selectedTilesX: string[];
    selectedTilesY: string[];
    playerTurn: string;
}

const initialState: AppState = {
    board: [
        { tileKey: 'T1', tileVal: '' },
        { tileKey: 'T2', tileVal: '' },
        { tileKey: 'T3', tileVal: '' },
        { tileKey: 'T4', tileVal: '' },
        { tileKey: 'T5', tileVal: '' },
        { tileKey: 'T6', tileVal: '' },
        { tileKey: 'T7', tileVal: '' },
        { tileKey: 'T8', tileVal: '' },
        { tileKey: 'T9', tileVal: '' }
    ],
    selectedTilesX: [],
    selectedTilesY: [],
    playerTurn: 'X'
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTileVal: (state, action: PayloadAction<{ tileKey: string; tileVal: string }>) => {
            const { tileKey, tileVal } = action.payload;
            const tile = state.board.find(t => t.tileKey === tileKey);
            if (tile) {
                tile.tileVal = tileVal;
            }
        },
        setSelectedTilesX: (state, action: PayloadAction<string[]>) => {
            state.selectedTilesX = action.payload
        },
        setSelectedTilesY: (state, action: PayloadAction<string[]>) => {
            state.selectedTilesY = action.payload
        },
        changePlayerTurn: (state) => {
            state.playerTurn = state.playerTurn === 'X' ? 'O' : 'X';
        }
    }
})

export const {
    setTileVal,
    setSelectedTilesX,
    setSelectedTilesY,
    changePlayerTurn
} = appSlice.actions;

export default appSlice.reducer;