import { useEffect } from "react"

const Filter = ({popular,filtered,setFiltered,activeGenre,setActiveGenre}) => {

const all = ()=>{
    setActiveGenre(0);
    setFiltered(popular)
}

    useEffect(()=>{
        if (activeGenre === 0) {
            setFiltered(popular);
            return  
        }
        const filterMovie = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
        setFiltered(filterMovie);
    },[activeGenre])

  return (
    <div className="flex gap-3 ms-4 lg:justify-normal lg:mt-10   lg:ms-40">

     <button onClick={all} className="text-sm  bg-gray-500 text-white rounded w-16 h-8 lg:w-24 lg:h-10 text-center">All</button>
     <button onClick={() => setActiveGenre(27)} className="text-sm  bg-gray-500 text-white rounded w-16 h-8 lg:w-24 lg:h-10 text-center">Horror</button>
     <button onClick={() => setActiveGenre(28)} className="text-sm bg-gray-500 text-white rounded w-16 h-8 lg:w-24 lg:h-10 text-center">Action</button>
      
    </div>
  )
}

export default Filter
