
import  { useEffect, useState } from 'react'
import Movie from './components/Movie'
import Filter from './Filter'
import { AnimatePresence, motion } from "framer-motion"
import Welcome from './Welcome'

const App = () => {

  const [popular,setPopular] = useState([])
  const [filtered,setFiltered] = useState([])
  const [activeGenre,setActiveGenre] = useState(0)

  useEffect(()=>{
 fetchPopular()
  },[])

  const fetchPopular = async() =>{
    const api = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=ae49345e25ed6247d3d26aa9428d714f&language=en-US&page=1")
    const {results} = await api.json()
    setPopular(results)
    setFiltered(results)
    console.log(results);
  }

  return (
    <div className=''>
      <Welcome/>
        <Filter popular={popular} filtered={filtered} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        <motion.div layout className='flex flex-wrap gap-5 lg:gap-10 justify-center m-5 lg:m-8 lg:my-10'>
          <AnimatePresence>
            {filtered.map(movie =>{
             return(
              <Movie key={movie.id} {...movie}/>
                   )
             })}
          </AnimatePresence>

         </motion.div>
    </div>
   
  )
}

export default App
