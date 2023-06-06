import {Routes,Route} from "react-router-dom"
import Home from "./page/home";
import Movie from "./page/movie";
function App() {
  return (
   <Routes>
    <Route  path="/"  element={<Home/>} />
    <Route  path="/:id"  element={<Movie/>} />
   </Routes>
  );
}

export default App;
