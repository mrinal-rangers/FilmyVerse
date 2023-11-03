import React from 'react'
import ReactStars from 'react-stars'
import { useState } from 'react';
import { reviewsRef,db } from '../Firebase/Firebase';
import { addDoc,doc, updateDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert';

const Reviews = ({id,prevRating,users}) => {
    const[rating,setRating] =useState(0);
    const[loading,setLoading]=useState(false);
    const[form,setForm]=useState("");

    const sendReview = async ()=>{
        setLoading(true);
        try{
            await addDoc(reviewsRef,{
                movie_id:id,
                name:"mrinal",
                rating:{rating},
                thought:form,
                timestamp: new Date().getTime()
            });

            const ref=doc(db,"movies",id);
            await updateDoc(ref,{
                rating : (prevRating*users + rating)/(users+1),
                users:users+1
            })

            swal({
                title:"Review Sent",
                icon:"success",
                buttons:false,
                timer:3000
              })
        }catch(error){
            swal({
                title:"Error",
                icon:"error",
                buttons:false,
                timer:3000
              })
        }
        setLoading(false);
    }

  return (
    <div className='mt-8 w-full border-t-2 pt-10 border-gray-700'>
    <input 
        onChange={(e)=>setForm(e.target.value)}
        placeholder='Share Your Thoughts'
        className='w-full p-2 mb-4 outline-none header bg-gray-900'
    />
    <div className='flex justify-evenly'>
     <ReactStars
     value={rating}
     edit={true}
     size={20}
     onChange={(e)=>{setRating(e)}}

    />
    <button onClick={sendReview}className='bg-green-600 w-3/5 p-2 mt-2 h-10 rounded flex items-center justify-center'>
    {loading?<TailSpin height={20} color='white' /> :"Share"}
    </button>
    </div>
    </div>
  )
}

export default Reviews