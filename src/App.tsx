import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ReversedStringPage from "./pages/ReversedStringPage"
import MapPage from "./pages/MapPage"
import DataBaseSimulator from "./pages/DataBaseSimulator"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reversed-string" element={<ReversedStringPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/database-simulator" element={<DataBaseSimulator />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
