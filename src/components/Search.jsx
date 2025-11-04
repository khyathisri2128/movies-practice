import React from 'react'

export default function SearchBar({searchTerm,setSearchTerm}) {
  return (
    <>
      <input type="text"
      placeholder='Enter Movie Name' 
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}
      style={{
        borderRadius:"10px",
        width:"30%",
        padding:"15px",
        fontSize:"1.2rem",
        marginRight:"10px"
      }}/>
    </>
  )
}
