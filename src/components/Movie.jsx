import { motion } from "framer-motion"

const Movie = ({title,poster_path,backdrop_path}) => {
  return (
    <motion.div layout>
        <img className="w-32 lg:w-60 lg:h-80" src={"https://image.tmdb.org/t/p/w300/"+ poster_path} alt="" />
      <p className=" text-xs w-32 lg:w-60 lg:text-sm text-center">{title.substring(0,30)}</p>
    </motion.div>
  )
}

export default Movie
