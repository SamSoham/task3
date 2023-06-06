import {Stack, Typography,Button } from '@mui/material'
import { Link } from "react-router-dom";

export default function MovieBox(props){
    
    const {name,rating,image,lang,index} = props

    return(
        <>
       <Stack sx={{width:"fit-content",padding:"8px",gap:"8px",boxShadow:"0 3px 10px 0 #aaa"}}>
        <img src={image} alt="" width={250} height={260}/>
        <Typography sx={{fontWeight:"700",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",width:"220px"}}>
            {name}
        </Typography> 
        <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={{fontWeight:"500",fontSize:"14px"}}>Lang:{lang}</Typography>
      
        <Typography sx={{fontWeight:"500",fontSize:"14px"}}>Genre:{rating[0]}</Typography>
 
        </Stack>
        <Link to={`/${index}`}>
        <Button variant='contained' style={{backgroundColor:"black",cursor:"pointer"}} fullWidth="true">
           Explore
           </Button>
        </Link>
       
       </Stack>
        </>
    )
}