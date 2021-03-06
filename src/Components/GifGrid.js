import React, { useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3> {category} </h3>

      { loading && <p className='animate__animated animate__flash'>Loading...</p> }

      <div className='card-grid'>
            {
              images.map( i => {
                return <GifGridItem 
                key={i.id}
                {...i}
                />
              })
            }
      </div>
    </>
  )
}
