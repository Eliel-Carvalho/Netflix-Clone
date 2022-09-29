import React from 'react';
import "./movieRow.css"

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function components({title, items}) {
  return(
    <div className='movieRow'>
        <h2>{title}</h2>

        <div className="movieRow--left">
            <ChevronLeftIcon style={{fontSize: 50}}/> 
        </div>
        <div className="movieRow--rigth">
            <ChevronRightIcon style={{fontSize: 50}}/> 
        </div>
        <div className="movieRow--listarea">
            <div className="movieRow--list">
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  ) ;
}

export default components;