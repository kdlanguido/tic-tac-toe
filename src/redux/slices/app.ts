import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type tile = {
    tileKey: string;
    tileVal: string;
}

export interface AppState {
    board: tile[];
    selectedTilesX: string[];
    selectedTilesO: string[];
    playerTurn: string;
    isGameOver: boolean;
    gameWinner: string;
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
    selectedTilesO: [],
    playerTurn: 'X',
    isGameOver: false,
    gameWinner: ''
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

            state.playerTurn === 'X' ? state.selectedTilesX.push(tileKey) : state.selectedTilesO.push(tileKey);
            state.playerTurn = state.playerTurn === 'X' ? 'O' : 'X';
        },
        setIsGameOver: (state, action: PayloadAction<boolean>) => {
            state.isGameOver = action.payload
        }
    }
})

export const {
    setTileVal,
    setIsGameOver
} = appSlice.actions;

export default appSlice.reducer;