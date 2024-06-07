import React from 'react'
import Tile from './Tile';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Board() {

    const { board } = useSelector((state: RootState) => state.app)

    return (
        <div className="flex flex-col">
            <div className="text-center m-auto mb-0" >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Game Over</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">Player Wins</p>
            </div>
            <div className="grid grid-cols-3 bg-primary h-max m-auto gap-0 mt-10 ">
                {
                    board.map((tile) => (
                        <Tile key={tile.tileKey} tile={tile} />
                    ))
                }
            </div>
        </div>
    )
}
