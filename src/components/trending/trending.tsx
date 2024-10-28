import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import MovieCard from "../movie-card/movie-card"
import CarouselCard from "../carousel-card/carousel-card";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
};

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

        // Movies displayed with the MovieCard component

        // <div className="movie-wrapper">
        //     <ul className="movie-box grid-layout grid-card">
        //         {data.results.map((show: {
        //             id: number,
        //             title: string,
        //             overview: string
        //         }) => (
        //             <MovieCard name={""} first_air_date={""} poster_path={""} vote_average={0} release_date={""} key={show.id} {...show} />

        //         ))}
        //     </ul>
        // </div>

        <div>
            <section id="new-release" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading">
                        <p className="sub-title hightlight">Online streaming</p>
                    </div>
                    <div className="heading control">
                        <h3 className="title center">What's Trending Today</h3>
                    </div>
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
                    <Slider {...settings}>
                        {data.results.map((show: {
                            id: number,
                            title: string,
                            overview: string
                        }) => (
                            <CarouselCard name={""} first_air_date={""} poster_path={""} vote_average={0} release_date={""} key={show.id} {...show} />

                        ))}
                    </Slider>
                </div>
            </section>
        </div>
    )
}





//////////////////

// for page

// import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
// import MovieCard from "../movie-card/movie-card"

// const queryClient = new QueryClient()

// type Show = {
//     backdrop_path: string,
//     id: number
//     title: string
//     overview: string
//     poster_path: string
//     media_type: string
// }

// export default function Trending() {
//     return (
//         <QueryClientProvider client={queryClient}>
//             <GetTrending />
//         </QueryClientProvider>
//     )
// }

// function GetTrending() {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDlhM2FkYmNiYjA3YWI2Y2M4NjVhOTc1MWY3NWZhNyIsIm5iZiI6MTcyOTY5OTcxMC43NjM3MjYsInN1YiI6IjY3MGQxYTk3OWYzNTMxZTZiMjZiZTIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53-1Zsz27wZ-hYeCWTXCByILOoide6JJI73JPLqZVJM'
//         }
//     };
//     const { isPending, error, data, isFetching } = useQuery({
//         queryKey: ['trending'],
//         queryFn: async () => {
//             const response = await fetch(
//                 'https://api.themoviedb.org/3/trending/all/day?language=en-US', options,
//             )
//             return await response.json()
//         },
//     })

//     if (isPending) return 'Loading...'

//     if (error) return 'An error has occurred: ' + error.message

//     return (

//         // <div className="movie-wrapper">
//         //     <ul className="movie-box grid-layout grid-card">
//         //         {data.results.map((show: {
//         //             id: number,
//         //             title: string,
//         //             overview: string
//         //         }) => (
//         //             <MovieCard name={""} first_air_date={""} poster_path={""} vote_average={0} release_date={""} key={show.id} {...show} />

//         //         ))}
//         //     </ul>
//         // </div>

//         <div>
//             <section id="new-release" className="suggestion">
//                 <div className="suggestion-box">
//                     <div className="heading">
//                         <p className="sub-title hightlight">Online streaming</p>
//                     </div>
//                     <div className="heading control">
//                         <h3 className="title center">What's Trending Today</h3>
//                         {/* <ul className="control-action">
//                             <li className="action-item active">
//                                 <a href="#" className="btn fw-6 rounded outline-dark small bg-gray lowercase">Animation</a>
//                             </li>
//                             <li className="action-item">
//                                 <a href="#" className="btn fw-6 rounded outline-dark small bg-gray lowercase">Movies</a>
//                             </li>
//                             <li className="action-item">
//                                 <a href="#" className="btn fw-6 rounded outline-dark small bg-gray lowercase">Romantic</a>
//                             </li>
//                             <li className="action-item">
//                                 <select name="type-movie" title="Choose type movie"
//                                     className="btn fw-6 dropdownable rounded outline-dark small bg-gray lowercase" defaultValue='English'>
//                                     <option value="english">English</option>
//                                     <option value="english">Blueray</option>
//                                     <option value="english">4k movie</option>
//                                     <option value="english">Hd movie</option>
//                                 </select>
//                             </li>
//                         </ul> */}
//                     </div>
//                     <div className="movie-wrapper">
//                         <ul className="movie-box grid-layout grid-card">
//                             {data.results.map((show: {
//                                 id: number,
//                                 title: string,
//                                 overview: string
//                             }) => (
//                                 <MovieCard name={""} first_air_date={""} poster_path={""} vote_average={0} release_date={""} key={show.id} {...show} />

//                             ))}
//                         </ul>
//                     </div>
//                     <ul className="pagination">
//                         <li className="pagination-item active">
//                             <a href="#" className="fw-6">1</a>
//                         </li>
//                         <li className="pagination-item">
//                             <a href="#" className="fw-6">2</a>
//                         </li>
//                         <li className="pagination-item">
//                             <a href="#" className="fw-6">3</a>
//                         </li>
//                         <li className="pagination-item">
//                             <a href="#" className="fw-6">4</a>
//                         </li>
//                         <li className="pagination-item">
//                             <a href="#" className="fw-6">Next</a>
//                         </li>
//                     </ul>
//                 </div>
//             </section>
//         </div>
//     )
// }
