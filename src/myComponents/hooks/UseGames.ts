// import apiClient from "../services/api-client"

import useData from "./UseData"
import type { Genre } from "./UseGenres"


export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: {platform: Platform}[]
    metacritic: number
}



const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames