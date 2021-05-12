import React, { useState, useEffect, useCallback } from "react";
import useDebounce from './useDebounce';
import { MDBCol, MDBIcon } from "mdbreact";


export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 100);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  
  return (
    <MDBCol md="6">
    <div className="input-group md-form form-sm form-1 pl-0">
      <div className="input-group-prepend">
        <span className="input-group-text purple lighten-3" id="basic-text1">
          <MDBIcon className="text-white" icon="search" />
        </span>
      </div>
      <input 
      className="form-control my-0 py-1" 
      type="text" 
      placeholder="Search Media" 
      aria-label="Search" 
      value={value}
      onChange={(event) => setValue(event.target.value)}/>
    </div>
  </MDBCol>
  );

}

{/* <section className="search">
  <form
    className="search__form"
    onSubmit={(event) => event.preventDefault()}
  >
    <input className="input-box-style"
      placeholder="Search Media"
      name="search"
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  </form>
</section> */}