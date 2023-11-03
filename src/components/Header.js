import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='z-10 sticky top-0 bg-black text-2xl text-red-500 p-3 font-bold border-b-2 border-gray-500 flex justify-between items-center'>
       <Link to="/">
       <span className='text-m md:text-4xl'> Filmy<span className='text-white'>Verse</span></span> 
       </Link>
       <Link to="/addmovie">
       <h1 className='text-3xl  text-white p-3 cursor-pointer'>
       <Button >
       <AddIcon className='mr-3 ' color='secondary'  />
       <span className='text-white text-m md:text-2xl'>Add Movies</span>
       </Button>
       </h1>
       </Link>
       
    </div>
  )
}

export default Header