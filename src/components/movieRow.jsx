import React, { useState } from 'react';
import "./movieRow.css";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function components({title, items}) {

    const [scrollX, setscrollX] = useState()

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2) 
        if(x > 0 ){
            x = 0
        }
        setscrollX(0)
    }

    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2) 
        let listw = items.results.length * 150
        if((window.innerWidth - listw) > x){
            x = (window.innerWidth - listw) - 60
        }
        setscrollX(x)
    }

  return(
    <div className='movieRow'>
        <h2>{title}</h2>

        <div className="movieRow--left" onClick={handleLeftArrow}>
            <ChevronLeftIcon style={{fontSize: 50}}/> 
        </div>
        <div className="movieRow--rigth" onClick={handleRightArrow}>
            <ChevronRightIcon style={{fontSize: 50}}/> 
        </div>
        <div className="movieRow--listarea">
            <div className="movieRow--list" style={{
                marginLeft: scrollX,
                width: items.results.length * 150
            }}>
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