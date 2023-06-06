import { createContext,useContext,useState,useEffect} from "react"
import axios from "axios"

const AppContext = createContext()

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

const AppProvider = ({children})=>{

    const [info,setInfo] = useState("")
    async function Fetchdata(){
         let user= await axios.get('https://api.tvmaze.com/search/shows?q=all')
        setInfo(user)
     }
  useEffect(()=>{
     Fetchdata()
  },[])

    return  <AppContext.Provider value={info}>
        {children}
        </AppContext.Provider>
}


export {AppContext,AppProvider,useGlobalContext}