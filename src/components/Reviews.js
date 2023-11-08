import React, { useContext, useEffect } from 'react'
import ReactStars from 'react-stars'
import { useState } from 'react';
import { reviewsRef,db } from '../Firebase/Firebase';
import { addDoc,doc, updateDoc,query,where,getDocs } from 'firebase/firestore';
import { TailSpin,ThreeCircles} from 'react-loader-spinner';
import swal from 'sweetalert';
import {Appstate} from "../App"
import { useNavigate } from 'react-router-dom';

const Reviews = ({id,prevRating,users}) => {
    const useAppState= useContext(Appstate);
    const navigate=useNavigate();
    const[rating,setRating] =useState(0);
    const[loading,setLoading]=useState(false);
    const [loading2,setLoading2]= useState(false);
    const[form,setForm]=useState("");
    const[data,setData]=useState([]);
    const[newAdded,setNewAdded]=useState(0);

    const sendReview = async ()=>{
        setLoading(true);
        try{
            if(useAppState.login===false) {
                navigate('/login');
            }
            await addDoc(reviewsRef,{
                movie_id:id,
                name: useAppState.userName,
                rating:rating,
                thought:form,
                timestamp: new Date().getTime()
            });

            const ref=doc(db,"movies",id);
            await updateDoc(ref,{
                rating : (prevRating*users + rating)/(users+1),
                users:users+1
            })
            setRating(0);
            setForm("");
            setNewAdded(newAdded+1);

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

    useEffect(()=>{
        async function getData(){
            setLoading2(true);
            setData([]);
            let quer =query(reviewsRef,where('movie_id','==',id));
            const querySnapshot = await getDocs(quer);

            querySnapshot.forEach((doc)=>{
                setData((prev)=>[...prev,doc.data()]);
            })

            setLoading2(false);
        }
        getData();
    },[newAdded])

  return (
    <div className='mt-8 w-full border-t-2 pt-10 border-gray-700'>
    <input 
        onChange={(e)=>setForm(e.target.value)}
        placeholder='Share Your Thoughts'
        className='w-full p-2 mb-4 outline-none header bg-gray-900'
    />
    <div className='flex '>
     <ReactStars
     value={rating}
     edit={true}
     size={20}
     onChange={(e)=>{setRating(e)}}
    />
    <button onClick={sendReview}className='bg-green-600 w-2/5 md:w-3/5 p-2 mt-2 ml-4 h-10 rounded flex items-center justify-center'>
    {loading?<TailSpin height={20} color='white' /> :"Share"}
    </button>
    </div>
    {loading2?<div className='mt-8 flex justify-center'><ThreeCircles color='white' height={40}/></div>:
        <div className='mt-8 flex flex-col justify-center'>
        
        {data.map((e,i)=>{
            return<div className='p-4 w-full border-b-2 border-gray-700 '  key={i}>
                <div className='flex gap-8'>
                <p className='text-red-500 text-xl'>{e.name}</p>
                <p>{new Date(e.timestamp).toLocaleString()}</p>
                </div>
                <ReactStars
                value={e.rating}
                size={20}
                edit={false}
                />
                <p>{e.thought}</p>
            </div>
        })
        }
        </div>}
    </div>
  )
}

export default Reviews
