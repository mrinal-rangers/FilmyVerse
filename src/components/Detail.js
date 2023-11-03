import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { getDoc,doc } from 'firebase/firestore'
import { db } from '../Firebase/Firebase'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();
    const [data,setData] =useState({
        title:"",
        year:"",
        image:"",
        description:""
    });
    useEffect(()=>{
        async function getData(){
            const _doc =doc(db,"movies",id);
            const _data= await getDoc(_doc);
            setData(_data.data());
            console.log(data);
        }
        getData();
    })

  return (
    <div className='p-4 mt-4 w-full flex flex-col gap-6 md:flex-row justify-center'>
    <img className='h-96 md:sticky top-40' src={data.image} alt="img" />
    <div className='ml-8 w-4/5 md:w-1/2'>
        <h1 className='text-3xl font-bold'>{data.title} <span>({data.year})</span></h1>
        <ReactStars
            size={20}
            value='5'
            edit={false}
          />
        <p className='text-xl mt-6 '>{data.description}</p>
        
    </div>
    </div>
  )
}

export default Detail