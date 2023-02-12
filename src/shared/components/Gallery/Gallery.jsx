import React from 'react'
import './GalleryStyle.scss'

function Gallery({list}) {
  return (
    <div className='gallery'>
    {list.map((simpsons, index) => (
        <figure key={index} className={"gallery__card" + (simpsons.characterDirection === "Left" ? " c-gallery__item--left" : "")}>
            <img src={simpsons.image} alt="simpson"/>;
        <br></br>
            {simpsons.character}; 
        <br></br>
            {simpsons.quote};
        </figure>
    ) )}
    </div>
  )
}

export {Gallery}