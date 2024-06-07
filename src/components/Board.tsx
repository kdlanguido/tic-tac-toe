import React from 'react'
import Tile from './Tile';

export default function Board() {

    return (
        <div className="grid grid-cols-3 bg-primary h-max m-auto gap-0">
            <Tile />
            <Tile />
            <Tile />

            <Tile />
            <Tile />
            <Tile />

            <Tile />
            <Tile />
            <Tile />
        </div>
    )
}
