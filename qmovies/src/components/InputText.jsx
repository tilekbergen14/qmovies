import React from "react";

export default function InputText({placeholder}) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span
          className="input-group-text max-width bg-info"
          id="inputGroup-sizing-sm"
        >
          {placeholder}
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        aria-label="Default"
        placeholder={placeholder}
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );
}
