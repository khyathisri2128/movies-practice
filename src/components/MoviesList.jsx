import React, { useState, useEffect } from 'react'
import moviesData from '../data.json'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'

export default function MovieList() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSeachterm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [filteredMovies, setFilteredMovies] = useState([])
    useEffect(() => {
        setMovies(moviesData)
        setFilteredMovies(moviesData)
    }, [])
    useEffect(()=>{
        const newFiltered=movies.filter((i)=>{
            const matchMovieName=i.name.toLowerCase().includes(searchTerm.toLowerCase())
            console.log(matchMovieName)
            const matchSelectedcategory=selectedCategory? i.category===selectedCategory:true
            console.log(matchSelectedcategory) 
            return matchMovieName && matchSelectedcategory
        })
        setFilteredMovies(newFiltered)
    },[searchTerm,selectedCategory,movies])
    const categories = [...new Set(movies.map((m) => m.category))]
    return (
        <div>
            <h1>Movie Search App</h1>
            {console.log(categories)}
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSeachterm} />
                {
                    categories?(
                         <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory} />
                    ):null
                }
           
            {
                filteredMovies.length === 0 ? (
                    <div>No Movies Found</div>
                ) : (
                    filteredMovies.map((i) => (
                        <div key={i.id}>
                            <h3>Title:{i.name}</h3>
                            <p>Category:{i.category}</p>
                            <p>Year:{i.year}</p>
                        </div>
                    ))
                )
            }

        </div>
    )
}
  