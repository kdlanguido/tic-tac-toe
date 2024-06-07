import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import { useDispatch, useSelector } from 'react-redux';
import { setGameWinner, setIsGameOver, setTileVal } from '../redux/slices/app';
import { AppDispatch, RootState } from "../redux/store";

export default function Tile({ tile }: { tile: { tileKey: string, tileVal: string } }) {

    const dispatch = useDispatch<AppDispatch>();
    const { playerTurn, selectedTilesX, selectedTilesO, isGameOver } = useSelector((state: RootState) => state.app);

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

    const handleClick = () => {

        dispatch(setTileVal({
            tileKey: tile.tileKey,
            tileVal: playerTurn
        }))

        if (playerTurn === 'X') {
            const newSelectedTilesX = [...selectedTilesX, tile.tileKey];
            newSelectedTilesX.sort();

            for (const pattern of winPattern) {
                if (pattern.every(tile => newSelectedTilesX.includes(tile))) {
                    dispatch(setIsGameOver(true))
                    dispatch(setGameWinner('X'))
                    return;
                }
            }
        } else {
            const newSelectedTilesO = [...selectedTilesO, tile.tileKey];
            newSelectedTilesO.sort();

            for (const pattern of winPattern) {
                if (pattern.every(tile => newSelectedTilesO.includes(tile))) {
                    dispatch(setIsGameOver(true))
                    dispatch(setGameWinner('O'))
                    return;
                }
            }
        }
    }

    return (
        <Button className="h-20 w-20 p-0 m-0 !rounded-none" variant="outlined" disabled={isGameOver} onClick={handleClick}>{tile.tileVal !== '' ? tile.tileVal === 'X' ? <CloseIcon /> : <RadioButtonUncheckedIcon /> : ''}</Button>
    )
}
