// import data from './Data.json'
import Card from './Card'
import { useEffect, useState } from 'react'
import {  MagnifyingGlass } from 'react-loader-spinner';
import { getDocs } from 'firebase/firestore';
import { moviesRef } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';
//say hi


const Cards = () => {

  const [data,setData] = useState([]);
  const [loading,setLoading] =useState(true);
  useEffect(()=>{
    async function getData(){
      const _data= await getDocs(moviesRef);
      console.log(_data);
      _data.forEach((doc)=>{
        setData((prev)=>[...prev,{...(doc.data()),id:doc.id}]);
      })
    }
    setLoading(true);
    getData();
    setLoading(false);
  },[])

  return (
    <div className='flex flex-wrap pt-3 pl-5 pr-5 mt-5'>
    {loading?<div className='flex justify-center items-center w-full h-96'> <MagnifyingGlass height={80}  color='white' /></div> :
      data.map((e,i)=>{
        return (<Link to={`/detail/${e.id}`}> <Card e={e} i={i} /> </Link>)
      })
    
    }
    </div>
  );
};

export default Cards