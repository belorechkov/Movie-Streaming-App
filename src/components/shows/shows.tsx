import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieCard from "../movie-card/movie-card"
import { MutableRefObject, useEffect, useRef, useState } from "react";
import CarouselLoader from "../carousel/carousel-loader/carousel-loader";
import Pagination from "../pagination/pagination";

const queryClient = new QueryClient();

const mediaType = "tv"


export default function Shows() {


    return (
        <QueryClientProvider client={queryClient}>
            <GetShows />
        </QueryClientProvider>
    );
}

function GetShows() {

    const [listType, setListType] = useState("popular")

    let pageHeading = ""

    switch (listType) {
        case "on_the_air":
            pageHeading = "Latest Shows";
            break;
        case "popular":
            pageHeading = "Popular Shows";
            break;
        case "top_rated":
            pageHeading = "Top Rated Shows";
            break;
        default:
            pageHeading = "Shows";
            break;
    }

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1)
    }, [listType])

    const fetchURL = `https://api.themoviedb.org/3/tv/${listType}?language=en-US&page=${currentPage}`

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDlhM2FkYmNiYjA3YWI2Y2M4NjVhOTc1MWY3NWZhNyIsIm5iZiI6MTcyOTY5OTcxMC43NjM3MjYsInN1YiI6IjY3MGQxYTk3OWYzNTMxZTZiMjZiZTIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53-1Zsz27wZ-hYeCWTXCByILOoide6JJI73JPLqZVJM",
        },
    };
    const { isPending, error, data } = useQuery({
        queryKey: ["shows", fetchURL],
        queryFn: async () => {
            const response = await fetch(fetchURL, options);
            return await response.json();
        },
    });

    const pageTopRef = useRef() as MutableRefObject<HTMLLIElement>;


    const handlePageChange = (page: number) => {
        pageTopRef.current.scrollIntoView({behavior: 'smooth'});
        setCurrentPage(page);

    };

    if (isPending) return <CarouselLoader />;

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <section id="breadcrumb">
                <h2 className="title fw-7">
                    Shows <span className="hightlight"></span>
                </h2>
                <ul className="breadcumb-box">
                    <li className="breadcumb-item">
                        <Link to="/" className="fw-6">Home</Link>
                    </li>
                    <li ref={pageTopRef} className="breadcumb-item disable">
                        <Link to="/shows" className="fw-6">Shows</Link>
                    </li>
                </ul>
            </section>

            <section id="new-release" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading control">
                        <h3 className="title center">{pageHeading}:</h3>
                        <ul className="control-action">
                            <li className={(listType === "on_the_air") ? "active" : ""}>
                                <a onClick={() => setListType("on_the_air")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">Latest</a>
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
