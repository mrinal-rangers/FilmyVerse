import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';



const Header = () => {
const useAppstate = useContext(Appstate);

  return (
    <div className='z-10 sticky top-0 bg-black text-2xl text-red-500 p-3 font-bold border-b-2 border-gray-500 flex justify-between items-center'>
       <Link to="/">
       <span className='text-m md:text-4xl'> Filmy<span className='text-white'>Verse</span></span> 
       </Link>
       {
        useAppstate.login ? 
       <Link to="/addmovie">
       <h1 className='text-3xl  text-white p-3 cursor-pointer'>
       <Button >
       <AddIcon className='mr-3 ' color='secondary'  />
       <span className='text-white text-m md:text-2xl'>Add Movies</span>
       </Button>
       </h1>
       </Link>
       :
       <Link to="/login">
       <h1 className='text-3xl  text-white p-3 cursor-pointer'>
       <Button >
       <span className='text-white text-m md:text-xl font-bold bg-emerald-500 p-2 rounded'>Login</span>
       </Button>
       </h1>
       </Link>

       }
       
    </div>
  )
}

export default Header