import React from 'react'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function Tile() {
    
    const handleClick = () => {
        alert('test')
    }

    return (
        <Button className="h-20 w-20 p-0 m-0 !rounded-none" variant="outlined" onClick={handleClick}><CloseIcon /></Button>
    )
}
