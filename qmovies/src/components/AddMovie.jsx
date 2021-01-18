import React, { useContext, useState } from "react";
import InputText from "./InputText";
import { MovieContext } from "../MovieContext";

export default function AddMovie() {
  const { genres } = useContext(MovieContext);
  const [genresArray, setGenres] = useState([]);
  const checker = (e) => {
    if(!e.target.checked) return setGenres(genresArray.filter(arrGenre => arrGenre !== e.target.value))
        
    genresArray.push(e.target.value)  
    setGenres(genresArray)
  }
  return (
    <div style={{ marginTop: 72 }} className="container">
      <InputText placeholder="name" />
      <InputText placeholder="realesed year" />
      <InputText placeholder="slug" />
      <InputText placeholder="type" />
      <InputText placeholder="language" />
      <InputText placeholder="subtitles" />
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span
            className="input-group-text max-width bg-info"
            id="inputGroup-sizing-sm"
          >
            Description
          </span>
        </div>
        <textarea
          placeholder="description"
          className="form-control"
          aria-label="With textarea"
        ></textarea>
      </div>
        {genres.map(genre => <div
        key={genre._id}
        className="btn-group mr-1"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
          <input
          type="checkbox"
          className="btn-check"
          id={genre._id}
          value={genre.name}
          autoComplete="off"
          className=""
          onChange={checker}
        />
        <label className="btn btn-outline-primary" htmlFor={genre._id}>
          {genre.name}
        </label>
      </div>)}
    </div>
  );
}
