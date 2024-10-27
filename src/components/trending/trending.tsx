import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import MovieCard from "../movie-card/movie-card"

const queryClient = new QueryClient()

type Show = {
    backdrop_path: string,
    id: number
    title: string
    overview: string
    poster_path: string
    media_type: string
}

export default function Trending() {
    return (
        <QueryClientProvider client={queryClient}>
            <GetTrending />
        </QueryClientProvider>
    )
}

function GetTrending() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDlhM2FkYmNiYjA3YWI2Y2M4NjVhOTc1MWY3NWZhNyIsIm5iZiI6MTcyOTY5OTcxMC43NjM3MjYsInN1YiI6IjY3MGQxYTk3OWYzNTMxZTZiMjZiZTIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53-1Zsz27wZ-hYeCWTXCByILOoide6JJI73JPLqZVJM'
        }
    };
    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['trending'],
        queryFn: async () => {
            const response = await fetch(
                'https://api.themoviedb.org/3/trending/all/day?language=en-US', options,
            )
            return await response.json()
        },
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (

        <div className="movie-wrapper">
            <ul className="movie-box grid-layout grid-card">
                {data.results.map((show: {
                    id: number,
                    title: string,
                    overview: string
                }) => (
                    <MovieCard name={""} first_air_date={""} poster_path={""} vote_average={0} release_date={""} key={show.id} {...show} />

                ))}
            </ul>
        </div>
    )
}


