import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieCard from "../movie-card/movie-card"
import { useState } from "react";
import CarouselLoader from "../carousel/carousel-loader/carousel-loader";
import Pagination from "../pagination/pagination";

const queryClient = new QueryClient();

const mediaType = "movie"


export default function Movies() {

    return (
        <QueryClientProvider client={queryClient}>
            <GetMovies />
        </QueryClientProvider>
    );
}

function GetMovies() {
    const [listType, setListType] = useState("popular")

    const [currentPage, setCurrentPage] = useState(1);

    const fetchURL = `https://api.themoviedb.org/3/movie/${listType}?language=en-US&page=${currentPage}`

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDlhM2FkYmNiYjA3YWI2Y2M4NjVhOTc1MWY3NWZhNyIsIm5iZiI6MTcyOTY5OTcxMC43NjM3MjYsInN1YiI6IjY3MGQxYTk3OWYzNTMxZTZiMjZiZTIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53-1Zsz27wZ-hYeCWTXCByILOoide6JJI73JPLqZVJM",
        },
    };
    const { isPending, error, data } = useQuery({
        queryKey: ["movies", fetchURL],
        queryFn: async () => {
            const response = await fetch(fetchURL, options);
            return await response.json();
        },
    });

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };

    if (isPending) return <CarouselLoader />;

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <section id="breadcrumb">
                <h2 className="title fw-7">
                    Movies <span className="hightlight"></span>
                </h2>
                <ul className="breadcumb-box">
                    <li className="breadcumb-item">
                        <Link to="/" className="fw-6">Home</Link>
                    </li>
                    <li className="breadcumb-item disable">
                        <Link to="/movies" className="fw-6">Movies</Link>
                    </li>
                </ul>
            </section>

            <section id="new-release" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading">
                        {/* <p className="sub-title hightlight">Online streaming</p> */}
                    </div>
                    <div className="heading control">
                        <h3 className="title center">Top Rated Movies</h3>
                        <ul className="control-action">
                            <li className={(listType === "now_playing") ? "active" : ""}>
                                <a onClick={() => setListType("now_playing")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">Latest</a>
                            </li>
                            <li className={(listType === "popular") ? "active" : ""}>
                                <a onClick={() => setListType("popular")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">popular</a>
                            </li>
                            <li className={(listType === "top_rated") ? "active" : ""}>
                                <a onClick={() => setListType("top_rated")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">Top-Rated</a>
                            </li>
                            {/* <li className="action-item">
                                <select name="type-movie" title="Choose type movie"
                                    className="btn fw-6 dropdownable rounded outline-dark small bg-gray lowercase" defaultValue='English'>
                                    <option value="english">English</option>
                                    <option value="english">Blueray</option>
                                    <option value="english">4k movie</option>
                                    <option value="english">Hd movie</option>
                                </select>
                            </li> */}
                        </ul>
                    </div>
                    <div className="movie-wrapper">
                        <ul className="movie-box grid-layout grid-card">
                            {data.results.map((show: {
                                id: number,
                                title: string,
                                overview: string
                                name: string
                                first_air_date: string
                                type: string
                                poster_path: string
                                release_date: string
                            }) => (
                                <MovieCard vote_average={0} key={show.id} {...show} media_type={mediaType} />

                            ))}
                        </ul>
                    </div>
                    <Pagination
                    currentPage={currentPage}
                    totalPages={data.total_pages}
                    onPageChange={handlePageChange}
                    />
                </div>
            </section>

        </div>
    );
}
