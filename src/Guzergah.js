import { isDisabled } from "@testing-library/user-event/dist/utils";
import {useState } from "react";
import Durak from "./Durak";
function Guzergah() {

    const [route, setRoute] = useState({
      route: '',
      stations: []
    })

  

    const handleRoute = e => {
      setRoute(route => ({
        ... route,
        route: e.target.value
      }))
    }

    const yeniDurak = e => {
      e.preventDefault()
      setRoute(route => ({
        ... route,
        stations: [
          ... route.stations,
          {
            name: "",
            en: "",
            boy: ""
          }
        ]
      }))
    }

    const handleStations = (value, name, key) => {
      setRoute(route => ({
        ... route,
        stations: route.stations.map((station, i)=>{
          if(key === i){
            console.log("kkkk")
            console.log(station, key)
            console.log("kkkkk")
            console.log(name)
            station[name] = value
          }
          return station
        })
      }))
    }

    const enabled = route.route

    return (
      <div className="Guzergah">
        <form>
            <input type="text" placeholder="Guzergah" name="Guzergah" value={route.route} onChange={handleRoute} />
            <input type="submit" value="Yeni Durak Ekle" onClick={yeniDurak}/>
        </form>
        <hr />
        <Durak handleChange={handleStations} stations={route.stations}/>
        <input type="submit" value="KAYDET"  disabled={!enabled}/>
        <pre>{JSON.stringify(route,null,2)}</pre>

      </div>
    );
  }

export default Guzergah;
