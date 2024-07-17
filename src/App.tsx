import { Navigate, Route, Routes } from "react-router-dom"
import AddNote from "./components/addnote"
import NotesList from "./noteList"


function App() {
 
  return (
    <>
    <Routes>
     <Route path="/" element={<h1>hello checker</h1>}/> 
     <Route path="/addnote" element={<AddNote />}/>
     {/* <Route path="*" element={<Navigate to='/'/>}/> */}
     <Route path="/notelist" element={<NotesList />}/> 
     </Routes>
    </>
  )
}

export default App
