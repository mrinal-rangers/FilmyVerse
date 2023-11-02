import data from './Data.json'
import Card from './Card'
import { useState } from 'react'

const [loading,setLoading] =useState(true);
//say hi

const Cards = () => {
  return (
    
    <div className='flex flex-wrap justify-between pt-3 pl-5 pr-5 mt-5'>
    {
      data.map((e,i)=>{
        return <Card e={e} i={i} />
      })
    }


    </div>
  );
};

export default Cards