import React from 'react'
import ReactStars from 'react-stars'

const Card = ({e,i}) => {
  return (
    <div key={i} className='card shadow-lg p-2 hover:-translate-y-4 cursor-pointer mt-5 mb-5 md:mt-3 transition-all duration-500'>
        <img className=" md:h-80  xs:h-36 mb-2 border-2"src={e.image} alt="img"/>
        <h1><span className='text-red-500'>Name :</span> {e.name}</h1>
        <h1 className='flex' ><span className='text-red-500 mr-1'>Ratings :</span>
          <ReactStars 
            value={e.rating}
            edit={false}
          />
        </h1>
        <h1><span className='text-red-500'>Year :</span> {e.year}</h1>
        </div>
  )
}

export default Card