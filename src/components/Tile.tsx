import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import { useDispatch, useSelector } from 'react-redux';
import { setTileVal } from '../redux/slices/app';
import { AppDispatch, RootState } from "../redux/store";

export default function Tile({ tile }: { tile: { tileKey: string, tileVal: string } }) {

    const dispatch = useDispatch<AppDispatch>();
    const { playerTurn, isGameOver } = useSelector((state: RootState) => state.app);

    const handleClick = () => {
        if (tile.tileVal === '') {
            dispatch(setTileVal({
                tileKey: tile.tileKey,
                tileVal: playerTurn
            }))
        }
    }

    return (
        <Button className="h-20 w-20 p-0 m-0 !rounded-none" variant="outlined" disabled={isGameOver} onClick={handleClick}>{tile.tileVal !== '' ? tile.tileVal === 'X' ? <CloseIcon /> : <RadioButtonUncheckedIcon /> : ''}</Button>
    )
}
