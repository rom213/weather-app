import { useEffect, useState } from 'react'
import './App.css'
import Climatarje from './Component/Climatarje'

function App() {
  const [cords, setCords] = useState(0)

useEffect(() => {
  const succes= pos=>{
    const obj={
      lat:pos.coords.latitude,
      lon:pos.coords.longitude
    }
    setCords(obj)
  }
navigator.geolocation.getCurrentPosition(succes)
}, [])






  return (
    <div className="App">
      <Climatarje 
      cords={cords}
      />
    </div>
  )
}

export default App
