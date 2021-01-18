import React, {createContext, useState, useEffect} from 'react'

export const MovieContext = createContext()

export default function ContextProvider({children}) {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [user, setUser] = useState(null)

    const createUser = (user) => {
        setUser(user)
        console.log(user)
    }

    useEffect(() => {
        fetch("http://localhost:5000/movies")
            .then(result => result.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err.message))

        fetch("http://localhost:5000/genres")
            .then(result => result.json())
            .then(data => setGenres(data))
            .catch(err => console.log(err.message))
    }, [])
    return (
        <MovieContext.Provider value={{movies, genres, createUser, user}}>
            {children}
        </MovieContext.Provider>
    )
}
