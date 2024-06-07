import React from 'react'
import Tile from './Tile';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Board() {


    const { board } = useSelector((state: RootState) => state.app)

    return (
        <div className="grid grid-cols-3 bg-primary h-max m-auto gap-0">
            {
                board.map((tile) => (
                    <Tile key={tile.tileKey} tile={tile} />
                ))
            }
        </div>
    )
}
