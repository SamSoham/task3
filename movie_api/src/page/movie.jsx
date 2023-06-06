import { useParams } from "react-router-dom"
import { useState } from "react";
import { useGlobalContext } from "../context";
import { Box,Button,Stack,Typography,Modal } from "@mui/material";
export default function Movie(){
    const info = useGlobalContext()
    const {id} = useParams()
    const user = info.data[id]
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
        <Stack sx={{background:"#495D6C",minHeight:"100vh",alignItems:"center",justifyContent:"center"}}>
        <Stack sx={{flexDirection:{sm:"row",xs:"column"},gap:"4px",background:"#ffffff",width:"fit-content",boxShadow:"0 3px 10px 0 #aaa",padding:"8px"}}>
        <img src={user.show.image.medium} alt="Movie Pht" width={280} height="auto"/>
        <Stack sx={{gap:{sm:"14px",xs:"8px"},width:{md:"70vw",sm:"50vw",xs:"280px"},justifyContent:"space-between",padding:{sm:"8px",xs:"0px"}}}>
            <Typography sx={{fontSize:"20px",fontWeight:"500"}}>{user.show.name}</Typography>
            <Typography sx={{fontSize:"14px",fontWeight:"500"}}>{user.show.genres[0]},{user.show.genres[1]}</Typography>
            <Typography sx={{fontSize:{sm:"14px",xs:"10px"},fontWeight:"500"}}>{user.show.summary}</Typography>
            <Button variant="contained" sx={{backgroundColor:"black",cursor:"pointer",width:"fit-content",color:'white',
            padding:"8px 16px",
        }} onClick={handleOpen} >Book</Button>
        </Stack>
       
        </Stack>
        </Stack>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
             position: 'absolute',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%)',
             width: 300,
             bgcolor: 'background.paper',
             border: '2px solid #000',
             boxShadow: 24,
             p: 4,
        }}>
             <img src={user.show.image.medium} alt="Movie Pht" width={280} height={250}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {user.show.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Type: {user.show.type}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Language: {user.show.language}
          </Typography>
          <Button variant='contained'  style={{backgroundColor:"black",cursor:"pointer",marginTop:"8px"}} fullWidth="true"onClick={handleClose} >
           Confirm
           </Button>
        </Box>
      </Modal>

        </>
    )
}