import React, {useEffect} from "react"
import Tmdb from "./tmdb"

function App() {

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      console.log(list)
    }

    loadAll()
  }, [])
  
  return (
    <div>ola mundo</div>
  )
}

export default App
