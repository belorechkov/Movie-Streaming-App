import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import MovieCard from "../movie-card/movie-card"
// import CarouselCard from "../carousel-card/carousel-card";
import Carousel from "../carousel/carousel";

// const settings = {
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 3000,
//     swipeToSlide: true,
//     slidesToShow: 5,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     responsive: [
//         {
//             breakpoint: 1600,
//             settings: {
//                 slidesToShow: 4,
//             },
//         },
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 arrows: false,
//             },
//         },
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 speed: 1500,
//                 autoplaySpeed: 3000,
//                 arrows: false,
//             },
//         },
//         {
//             breakpoint: 575,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 speed: 1500,
//                 autoplaySpeed: 3000,
//                 arrows: false,
//             },
//         },
//     ],
// };

const queryClient = new QueryClient();

// type Show = {
//     backdrop_path: string,
//     id: number
//     title: string
//     overview: string
//     poster_path: string
//     media_type: string
// }

export default function Trending() {
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
        queryKey: ["trending"],
        queryFn: async () => {
            const response = await fetch("https://api.themoviedb.org/3/trending/all/week?language=en-US", options);
            return await response.json();
        },
    });

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <section id="new-release" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading">
                        <p className="sub-title hightlight">Online streaming</p>
                    </div>
                    <div className="heading control">
                        <h3 className="title center">Trending This Week</h3>
                        <ul className="control-action">
                            {/* <li className="action-item control">
                                <div className="double-btn btn rounded fw-6 outline-dark small bg-dark lowercase">
                                    <a href="#"><i className="fa fa-angle-left"></i></a>
                                    <a href="#"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    <div className="movie-wrapper">
                        {/* <ul className="movie-box grid-layout grid-card">
                            {data.results.map((show: {
                                id: number,
                                title: string,
                                overview: string
                            }) => (
                                <MovieCard name={""} first_air_date={""} poster_path={""} vote_average={0} release_date={""} key={show.id} {...show} />

                            ))}
                        </ul> */}
                    </div>
                    <div className="slick-track grid-card carousel">
                        <Carousel data={data} />
                    </div>
                </div>
            </section>
        </div>
    );
}

