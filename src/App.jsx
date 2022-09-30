import React, {useEffect, useState} from "react"
import FeaturedMovie from "./components/FeaturedMovie"
import MovieRow from "./components/movieRow"
import Tmdb from "./tmdb"
import Header from './components/Header'

import Loading from './assets/Netflix_LoadTime.gif'

import "./app.css"
import tmdb from "./tmdb"

function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    //PEGAR LISTA TOTAL
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //PEGAR FILME DESTAQUE
      let originals = list.filter(i => i.slug === 'originals')
      let randomchosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomchosen] //gerando munero aleatorio
      let choseninfo = await tmdb.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(choseninfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.addEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {
          movieList.map((item, key)=>(
           <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
      </section>

      <footer>Direito de Imagem para a Netflix <br />
      Dados pegos do site Themoviedb.org</footer>

      {movieList.length <= 0 &&    
        <div className="loading">
          <img src={Loading}  alt="carregando" />
        </div>
      }
    </div>
  )
}

export default App
