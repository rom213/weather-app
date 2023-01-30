import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'


const Climatarje = ({cords}) => {
    const [clima, setclima] = useState()
    const [typetem, settypetem] = useState(true)
    const [Time, setTime] = useState()
    const [hourimg, sethourimg] = useState()
    const [first, setfirst] = useState(true)
  
    useEffect(() => {
        if (cords) {
          const apikey='44ea201f01927cc01fc5bc1c6dccadde'
          const url=`https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.lon}&appid=${apikey}`
          axios.get(url)
          .then(res=>setclima(res.data))
          .catch(err=> console.log(err))
          .finally(()=>setfirst(false))
        }
        }, [cords])


      useEffect(() => {
        let stime

        Time?.hora>=5 & Time?.hora<=6 ?
        stime='https://fondosmil.com/fondo/13618.jpg'
        :
        Time?.hora>=7 & Time?.hora<=15 ?
        stime='https://w0.peakpx.com/wallpaper/794/741/HD-wallpaper-warm-day-nature-landscape.jpg'
        :
        Time?.hora>=16 & Time?.hora<=18 ?
        stime='https://images5.alphacoders.com/373/373597.jpg'
        :
        stime='https://i.pinimg.com/originals/a1/80/49/a180498e6d7239a20fbac817765bf99f.jpg'

        sethourimg(stime)
      }, [Time])


        const handleclick=()=>settypetem(!typetem)

        useEffect(() => {
          let  horaAc= new Date();
          const hora={
            hora:horaAc.getHours(),
            minuto:horaAc.getMinutes(),
            segundo:horaAc.getSeconds()
          }
          setTime(hora)
        }, [typetem])
console.log(clima);


  return (
    
    <div className='fondo' style={{backgroundImage:`url(${hourimg})`, 
    backgroundRepeat: 'no-repeat',
    position:'fixed',width:'100%' }}>
      {
        first ?
        <div className='tarjet'>
          <h2>Loading....</h2>
        </div>
        :
      <div className='tarjet'>
        <h3>{clima?.name}, {clima?.sys.country}</h3>
        <div className='datos'>
            {
            typetem ?
            <div >
            <h1>{((clima?.main.temp)-273).toFixed(1)} °C</h1>
            <strong>max: {((clima?.main.temp_max)-273).toFixed(1)} °C</strong>  <br />
            <strong>min: {((clima?.main.temp_min)-273).toFixed(1)} °C</strong>  
            </div>
            :
            <div>
            <h1> {(((clima?.main.temp)-273)*9/5+32).toFixed(1)} °F</h1> 
            <strong>max:{(((clima?.main.temp_max)-273)*9/5+32).toFixed(1)} °F</strong>  <br />
            <strong>min:{(((clima?.main.temp_min)-273)*9/5+32).toFixed(1)} °F</strong>  
            </div>
            }

            <img className='img' src={`http://openweathermap.org/img/wn/${clima?.weather[0].icon}@4x.png`} alt="" />
  
            <h2 className='hume'>humidity: {clima?.main.humidity}</h2>
            <div className='time'>
            <b>time</b>
            <h2>{Time?.hora}:{Time?.minuto}</h2>
            </div>
        </div>

        
        <button onClick={handleclick}>
            {
                typetem ?
                <h3>°F</h3>
                :
                <h3>°C</h3>
            }
        </button>
        <b className='cam'>change to</b>

        </div>
}
    </div>
          
  )
}

export default Climatarje