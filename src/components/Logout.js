import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const Logout = () => {
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(logout())
    }

    return (
    <>
    <Box>
        <Button onClick={handleClick} color="inherit">Log out</Button>
    </Box> 
    </>
    )
}

export default Logout
