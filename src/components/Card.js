import React from 'react'
import ReactStars from 'react-stars'

const Card = ({e,i}) => {
  return (
    <div key={i} className='card mr-2 md:mt-6  shadow-lg p-2 hover:-translate-y-4 cursor-pointer mt-5 mb-5 mt-1 md:mt-5 transition-all duration-500'>
        <img className=" h-40 md:h-72  xs:w-50% mb-2 border-2"src={e.image} alt="img"/>
        <h1 className='text-xs max-w-xs md:text-l ' ><span className='text-red-500'>Title :</span> {e.title}</h1>
        <h1 className='flex ' ><span className='text-red-500 mr-1'>Ratings :</span>
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