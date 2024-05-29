import { Route, Routes } from "react-router-dom"
import AddMenuItem from "./pages/AddMenuItem"


function App() {

  return (
    <>
      <Routes>
        <Route path="/add-new" element={<AddMenuItem />} />
      </Routes>
    </>
  )
}

export default App
