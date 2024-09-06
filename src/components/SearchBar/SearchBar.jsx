import React from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({onSearch}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const searchInput = form.elements.search.value;
        if(!searchInput){
            toast.error('fill in the field!');
        };
        onSearch(searchInput);        
        form.reset();
    };
  return (
    <header >
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={css.btnSearch} type="submit">Search</button>
        <Toaster/>
      </form>
    </header>
  );
};

export default SearchBar;
