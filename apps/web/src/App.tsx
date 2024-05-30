import { Route, Routes } from "react-router-dom"
import AddMenuItem from "./pages/AddMenuItem"
import HomePage from "./pages/Home"


function App() {

  return (
    <>
      <Routes>
        <Route path="/add-new" element={<AddMenuItem />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
