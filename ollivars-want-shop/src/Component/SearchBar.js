import React from 'react'

const SearchBar = (props) => {
    const checkLength = (string) => {
        if (string.length >= 3)
        props.setQuery(string)
        else props.setQuery("")
    }
    return (
       <input className="searchBar"
       onChange={(event)=> checkLength(event.target.value)}
       placeholder="Search for your Wand"
       />
    )
}

export default SearchBar;
