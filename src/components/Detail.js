import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { getDoc,doc } from 'firebase/firestore'
import { db } from '../Firebase/Firebase'
import { useParams } from 'react-router-dom'
import { MagnifyingGlass} from 'react-loader-spinner'
import Reviews from './Reviews'

const Detail = () => {
    const {id} = useParams();
    const [loading,setLoading]= useState(false);
    const [data,setData] =useState({
        title:"",
        year:"",
        image:"",
        description:"",
        rating:0,
        users:0
    });
    useEffect(()=>{
        async function getData(){
            setLoading(true);
            const _doc =doc(db,"movies",id);
            const _data= await getDoc(_doc);
            setData(_data.data());
            setLoading(false);
        }
        
        getData();
    },[id])

  return (
    <div className='p-4 mt-4 w-full flex flex-col gap-6 md:flex-row justify-center'>
    {loading ? <div className='flex justify-center items-center w-full h-96'> <MagnifyingGlass height={80}  color='white' /></div>:<>
    <img className='h-96 md:sticky top-40' src={data.image} alt="img" />
    <div className='ml-8 w-4/5 md:w-1/2'>
        <h1 className='text-3xl font-bold'>{data.title} <span>({data.year})</span></h1>
        <ReactStars
            size={20}
            value={data.rating}
            edit={false}
          />
        <p className='text-xl mt-6 '>{data.description}</p>
        <Reviews id={id} prevRating={data.rating} users={data.users}/>
    </div>
     </>  }
    </div>
  )
}

export default Detail