import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Key, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselLoader from "../carousel/carousel-loader/carousel-loader";
import EpisodeAccordion from "./episode-acordion/episode-acordion";
import MediaWrapper from "../media-wrapper/media-wrapper";

const queryClient = new QueryClient();



export default function Details() {
    return (
        <QueryClientProvider client={queryClient}>
            <GetMovieDetails />
        </QueryClientProvider>
    );
}

interface AccordionProps {
    episode_count: number;
    id: number;
    season_number: number;
}

function GetMovieDetails() {

    const [ShowMedia, setShowMedia] = useState(false);

    const handleWatchMedia = () => {
        setShowMedia(prevState => !prevState);
    };

    const { showType, id } = useParams();

    const URL = "https://api.themoviedb.org/3/" + showType + "/" + id + "?language=en-US";

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDlhM2FkYmNiYjA3YWI2Y2M4NjVhOTc1MWY3NWZhNyIsIm5iZiI6MTcyOTY5OTcxMC43NjM3MjYsInN1YiI6IjY3MGQxYTk3OWYzNTMxZTZiMjZiZTIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53-1Zsz27wZ-hYeCWTXCByILOoide6JJI73JPLqZVJM",
        },
    };
    const { isPending, error, data } = useQuery({
        queryKey: ["details"],
        queryFn: async () => {
            const response = await fetch(URL, options);
            return await response.json();
        },
    });


    if (isPending) return <CarouselLoader />;

    if (error) return "An error has occurred: " + error.message;

    // Get year
    const dateStr = data.release_date ? data.release_date : data.first_air_date;
    const date = new Date(dateStr);
    const year = date.getFullYear();

    // Round rating
    const rating = data.vote_average.toFixed(1);

    // Highlight last word in title
    const title = data.title ? data.title : data.name
    const titleLastWord = (data.title ? data.title : data.name).split(' ').pop()

    // const mediaURL = "https://vidsrc.xyz/embed/" + showType + "/" + id


    return (
        <div onClick={() => ShowMedia && handleWatchMedia()}>
            {/* {ShowMedia && <button className="close-wrapper-button"></button>} */}
            {ShowMedia && <MediaWrapper MediaURL={"https://vidsrc.xyz/embed/" + showType + "/" + id} />}
            {/* {ShowMedia && <MediaWrapper MediaURL={"https://vidsrc.xyz/embed/" + showType + "/" + id} onClose={() => handleWatchMedia}/>} */}

            <section id="movie-banner">
                <div className="movie-banner-box">
                    <div className="image thumb-image" onClick={handleWatchMedia}>
                        <img  src={"https://image.tmdb.org/t/p/w500//" + data.poster_path} alt="movie" />
                        <a  className="play-btn trailer-source">
                            <img src="../../src/assets/images/play_icon.png" alt="play_icon" />
                        </a>
                    </div>
                    <div className="content">
                        {/* <h5 className="sub-title fw-7 hightlight">New Espisodes</h5> */}
                        <h2 className="title fw-7">
                            {title.split(' ').slice(0, -1).join(' ')}
                            <span className="hightlight">{titleLastWord}</span>
                        </h2>
                        <ul className="meta">
                            <li className="meta-item meta-square bg-light">{showType}</li>
                            {/* {data.adult ? <li className="meta-item meta-square bg-light">pg 18</li> : <></>} */}
                            <li className="meta-item meta-outline bg-dark">HD</li>
                            <li className="meta-item meta-text type">
                                {data.genres.map((genre: { id: Key; name: string }) => {
                                    return (
                                        <a key={genre.id} href="#">
                                            {" "}
                                            {genre.name}
                                        </a>
                                    );
                                })}
                            </li>
                            <li className="meta-item meta-icon date">
                                <i className="fa fa-calendar"></i>
                                {year}
                            </li>
                            {showType === "movie" ? (
                                <li className="meta-item meta-icon duration">
                                    <i className="fa fa-clock-o"></i>
                                    {data.runtime + " min"}
                                </li>
                            ) : (
                                <></>
                            )}
                            <span className="meta-item meta-icon rating-box ">
                                <i className="fa fa-star-o "></i>
                                <p className="">{rating}</p>
                            </span>
                        </ul>
                        <p className="desc fw-5">{data.overview}</p>
                        <div className="action prime-box">
                            <div className="share fw-5 prime-item">
                                {/* <i className="fa fa-share-alt title"></i>
                                <a href="#" className="sub-title">
                                    Share
                                </a> */}
                                <p className="sub-title hightlight text-left">Ready to stream</p>
                            </div>
                            {/* <a href={"https://vidsrc.xyz/embed/" + showType + "/" + id} target="_blank" className="btn rounded outline prime bg-dark fw-7 trailer-source">
                                <i className="fa fa-play"></i>
                                Watch now
                            </a> */}
                            {/* <a onClick={() => <MediaWrapper MediaURL={mediaURL} />} href="" className="btn rounded outline prime bg-dark fw-7 trailer-source">
                                <i className="fa fa-play"></i>
                                Watch now
                            </a> */}
                            {/* <a onClick={handleShowWrapper} className="btn rounded outline prime bg-dark fw-7 trailer-source">
                                <i className="fa fa-play"></i>
                                Watch now
                            </a> */}
                            <a onClick={handleWatchMedia} className="btn rounded outline prime bg-dark fw-7 trailer-source">
                                <i className="fa fa-play"></i>
                                Watch now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {(showType === "tv") ?
                <section id="movie-detail">
                    <div className="movie-detail-box">
                        <div className="main-detail-box">
                            <div className="main-detail">
                                <div className="heading">
                                    <p className="sub-title hightlight text-left">Online streaming</p>
                                    <div className="title-inner">
                                        <h3 className="title small">Select An Episode</h3>
                                        {/* <div className="view-counter-box">
                                        <span className="view-counter fw-5">2.7 million</span>
                                        <span className="view-icon hightlight">
                                            <i className="fa fa-eye"></i>
                                        </span>
                                    </div> */}
                                    </div>
                                </div>
                                <div className="accordion-box">
                                    {data.seasons.map((season: AccordionProps) => <EpisodeAccordion episode_count={season.episode_count} id={data.id} season_number={season.season_number} key={season.id} />)}
                                </div>
                            </div>
                            <div className="main-image image">
                                <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt="Movie Poster" />
                            </div>
                        </div>
                        {/* <div className="description-box">
                        <h3 className="title fw-7">
                            About <span className="hightlight">History</span>
                        </h3>
                        <p className="desc">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything errassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
                    </div> */}
                    </div>
                </section>
                : <></>}
        </div>
    );
}
