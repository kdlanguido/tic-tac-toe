import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Tile {
    tileKey: string;
    tileVal: string;
}

const winPattern = [
    ['T1', 'T2', 'T3'],
    ['T4', 'T5', 'T6'],
    ['T7', 'T8', 'T9'],
    ['T1', 'T4', 'T7'],
    ['T2', 'T5', 'T8'],
    ['T3', 'T6', 'T9'],
    ['T1', 'T5', 'T9'],
    ['T3', 'T5', 'T7'],
];

export interface AppState {
    board: Tile[];
    selectedTilesX: string[];
    selectedTilesO: string[];
    playerTurn: string;
    isGameOver: boolean;
    gameWinner: string;
    numOfTurns: number;
    isGameDraw: boolean;
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
    gameWinner: '',
    numOfTurns: 0,
    isGameDraw: false
};

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

                const selectedTiles = state.playerTurn === 'X' ? state.selectedTilesX : state.selectedTilesO;
                for (const pattern of winPattern) {
                    if (pattern.every(tile => selectedTiles.includes(tile))) {
                        state.isGameOver = true;
                        state.gameWinner = state.playerTurn;
                        return;
                    }
                }

                state.playerTurn = state.playerTurn === 'X' ? 'O' : 'X';

                state.numOfTurns++;

                if (state.numOfTurns === 9) {
                    state.isGameDraw = true;
                    state.isGameOver = true;
                }
            }
        },
        resetGame: () => initialState
    }
});

export const { setTileVal, resetGame } = appSlice.actions;
export default appSlice.reducer;
