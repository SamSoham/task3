import { Stack } from "@mui/material";
import MovieBox from "../components/movieComponent";

import { useGlobalContext } from "../context";

export default function Home(){

   const info = useGlobalContext()

    return(
        <Stack sx={{display:"grid",gridTemplateColumns:" repeat( auto-fit,minmax(260px,1fr))",padding:"40px",rowGap:"25px",justifyContent:"center"}}>
        {info.data && info.data.map((movie,index)=>(
      <MovieBox key={index} rating={movie.show.genres} name={movie.show.name} image={movie.show.image.medium} 
      lang={movie.show.language} index={index} />
        ))}
        </Stack>
    )
}