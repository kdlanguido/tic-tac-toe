import Tile from './Tile';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "../redux/store";
import { Button } from '@mui/material';
import { resetGame } from '../redux/slices/app';

export default function Board() {

    const dispatch = useDispatch<AppDispatch>();
    const { board, gameWinner, isGameOver, isGameDraw } = useSelector((state: RootState) => state.app)

    return (
        <div className="flex flex-col">
            {isGameOver && (
                <div className="text-center m-auto mb-0">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Game Over</h1>
                    {isGameDraw ? (
                        <p className="mt-6 text-lg leading-8 text-gray-600 mb-3">Uh oh! Draw</p>
                    ) : (
                        <p className="mt-6 text-lg leading-8 text-gray-600 mb-3">Player {gameWinner} Wins</p>)}
                    <Button variant='outlined' className='mt-10' onClick={() => { dispatch(resetGame()) }}>Restart</Button>
                </div>
            )}

            <div className={`grid grid-cols-3 bg-primary h-max m-auto ${isGameOver && 'mt-10'} gap-0`}>
                {board.map((tile) => (
                    <Tile key={tile.tileKey} tile={tile} />
                ))}
            </div>
        </div>
    )
}
