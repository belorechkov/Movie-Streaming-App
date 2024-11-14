import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import MovieCard from "../movie-card/movie-card"
// import CarouselCard from "../carousel-card/carousel-card";
import Carousel from "../carousel/carousel";

const title = "Popular Movies"
const mediaType = "movie"

const queryClient = new QueryClient();

export default function PopularMovies() {
    return (
        <QueryClientProvider client={queryClient}>
            <GetTrending />
        </QueryClientProvider>
    );
}

function GetTrending() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDlhM2FkYmNiYjA3YWI2Y2M4NjVhOTc1MWY3NWZhNyIsIm5iZiI6MTcyOTY5OTcxMC43NjM3MjYsInN1YiI6IjY3MGQxYTk3OWYzNTMxZTZiMjZiZTIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53-1Zsz27wZ-hYeCWTXCByILOoide6JJI73JPLqZVJM",
        },
    };
    const { isPending, error, data } = useQuery({
        queryKey: ["popular"],
        queryFn: async () => {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);
            return await response.json();
        },
    });

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <Carousel data={data} title={title} mediaType={mediaType}/>
    );
}

