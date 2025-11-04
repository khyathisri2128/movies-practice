import React from 'react'

export default function CategoryFilter({categories,selectedCategory,setSelectedCategory}) {
  console.log(categories)
  return (
    <>
   <select
   style={{
    borderRadius:"10px",
        width:"30%",
        padding:"15px",
        fontSize:"1.2rem",
        marginRight:"10px"
   }}
   value={selectedCategory}
   onChange={(e)=>setSelectedCategory(e.target.value)}>
    <option value="">All Categories</option>
  {
    categories.map((i)=>(
      <option key={i} value={i}>
        {i}
        </option>
    ))
  }
 
   </select>
      
    </>         
  )
}

