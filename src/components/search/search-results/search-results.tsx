import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieCard from "../../movie-card/movie-card"
import CarouselLoader from "../../carousel/carousel-loader/carousel-loader";
import NoResult from "../no-result/no-result";

const queryClient = new QueryClient();



export default function SearchResults() {
    return (
        <QueryClientProvider client={queryClient}>
            <FetchSearch />
        </QueryClientProvider>
    );
}



function FetchSearch() {


    const { query } = useParams();

    const fetchURL = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDlhM2FkYmNiYjA3YWI2Y2M4NjVhOTc1MWY3NWZhNyIsIm5iZiI6MTcyOTY5OTcxMC43NjM3MjYsInN1YiI6IjY3MGQxYTk3OWYzNTMxZTZiMjZiZTIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53-1Zsz27wZ-hYeCWTXCByILOoide6JJI73JPLqZVJM",
        },
    };
    const { isPending, error, data } = useQuery({
        queryKey: ["search", query],
        queryFn: async () => {
            const response = await fetch(fetchURL, options);
            return await response.json();
        },
    });

    if (isPending) return <CarouselLoader />;

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <section id="breadcrumb">
                <h2 className="title fw-7">
                    Search <span className="hightlight"></span>
                </h2>
                <ul className="breadcumb-box">
                    <li className="breadcumb-item">
                        <Link to="/" className="fw-6">Home</Link>
                    </li>
                    <li className="breadcumb-item disable">
                        <Link to="/movies" className="fw-6">Search</Link>
                    </li>
                </ul>
            </section>

            <section id="new-release" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading">
                        {/* <p className="sub-title hightlight">Online streaming</p> */}
                    </div>
                    <div className="heading control">
                        <h3 className="title center">Search results for "{query}"</h3>
                        <ul className="control-action">
                            {/* <li className={(listType === "latest") ? "active" : ""}>
                                <a onClick={() => setListType("latest")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">Latest</a>
                            </li>
                            <li className={(listType === "popular") ? "active" : ""}>
                                <a onClick={() => setListType("trending")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">popular</a>
                            </li>
                            <li className={(listType === "top_rated") ? "active" : ""}>
                                <a onClick={() => setListType("top_rated")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">Top-Rated</a>
                            </li> */}
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
                            {data.results.length > 0 ? (
                                data.results
                                    .filter((show: { poster_path: string }) => show.poster_path)
                                    .map((show: {
                                        id: number,
                                        title: string,
                                        overview: string
                                        name: string
                                        first_air_date: string
                                        type: string
                                        poster_path: string
                                        release_date: string
                                    }) => (
                                        <MovieCard vote_average={0} key={show.id} {...show} />

                                    ))
                            ) : (
                                <NoResult />
                            )}
                        </ul>
                    </div>
                    {/* <ul className="pagination">
                        <li className="pagination-item active">
                            <a href="#" className="fw-6">1</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="fw-6">2</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="fw-6">3</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="fw-6">4</a>
                        </li>
                        <li className="pagination-item">
                            <a href="#" className="fw-6">Next</a>
                        </li>
                    </ul> */}
                </div>
            </section>

        </div>
    );
}
