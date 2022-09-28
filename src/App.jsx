import React, {useEffect, useState} from "react"
import FeaturedMovie from "./components/FeaturedMovie"
import MovieRow from "./components/movieRow"
import Tmdb from "./tmdb"

import "./app.css"

function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    //PEGAR LISTA TOTAL
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //PEGAR FILME DESTAQUE
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)) //gerando numero aleatorio
      let chosen = originals[0].items.results[randomChosen]

      console.log(chosen)
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {
          movieList.map((item, key)=>(
           <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
      </section>
    </div>
  )
}

export default App
