import React, { useContext } from "react";
import image from "../img/cinema.jpeg";
import {MovieContext} from "../MovieContext"

export default function Homepage() {
  const value = useContext(MovieContext)
  const { movies } = value
  function FormatDate(date){
    const now = new Date()
    const pDate = new Date(date)
    const newDate = now - pDate
    let diff = Math.floor(newDate / 1000) 
    if(diff >= 60 && diff < 3600){
      diff = `${Math.floor(diff / 60)}mins`
    }
    else if(diff >= (1440 * 60) && diff < (1440 * 60 * 30)){
      diff = Math.floor(diff / (1440 * 60))
      diff = diff === 1 ? `${diff} day` : `${diff} days`
    }
    else if(diff >= 3600 && diff < (1440 * 60)){
      diff = Math.floor(diff / 3600)
      diff = diff === 1 ? diff + "hour" : diff + "hours"
    }
    else if(diff < 60){
      diff = Math.floor(diff / 60)
      diff = diff === 1 ? diff + "second" : diff + "seconds"
    }
    else{
      diff = Math.floor(diff / (1440 * 60 * 30))
      diff = diff === 1 ? diff + "month" : diff + "months"
    }
    return diff
  }
  return (
    <div style={{ height: "100%", marginTop: 72}} className="container d-flex homepage">
      <div className="d-width w-50 p-3 align-self-center">
        <img
          style={{ width: "100%", borderRadius: 15 }}
          src={image}
          alt="cinema"
        />
        <h4 style={{ width: "auto", margin: 0 }} className="text-center m-3">
          #1 online movie streaming site in this region
        </h4>
      </div>
      <div className="d-width w-50 p-3">
        <p className="text-center">Latest movies</p>
        <ul className="d-flex flex-column list-unstyled">
            {movies.map(movie => <li key={movie._id} className="border-bottom m-2 d-flex justify-content-between"><p className="m-0">{movie.name}</p><p style={{fontSize: 9, margin: 0, display: "flex", alignItems: "flex-end"}}>{FormatDate(movie.createdAt)} ago</p></li>)}
        </ul>
      </div>
    </div>
  );
}
