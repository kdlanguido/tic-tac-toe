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

            if (tile && tile.tileVal === '') {
                tile.tileVal = tileVal;
                if (state.playerTurn === 'X') {
                    state.selectedTilesX.push(tileKey);
                } else {
                    state.selectedTilesO.push(tileKey);
                }
                state.playerTurn = state.playerTurn === 'X' ? 'O' : 'X';
            }
        },
        setIsGameOver: (state, action: PayloadAction<boolean>) => {
            state.isGameOver = action.payload
        },
        setGameWinner: (state, action: PayloadAction<string>) => {
            state.gameWinner = action.payload
        },
        resetGame: (state) => {
            state.board = initialState.board;
            state.selectedTilesX = initialState.selectedTilesX;
            state.selectedTilesO = initialState.selectedTilesO;
            state.playerTurn = initialState.playerTurn;
            state.gameWinner = initialState.gameWinner;
            state.isGameOver = initialState.isGameOver;
        }
    }
})

export const {
    setTileVal,
    setIsGameOver,
    setGameWinner,
    resetGame
} = appSlice.actions;

export default appSlice.reducer;