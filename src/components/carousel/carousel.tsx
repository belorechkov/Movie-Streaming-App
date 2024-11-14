import { useRef } from "react";
import Slider from "react-slick";

import CarouselCard from "../carousel-card/carousel-card";

export default function Carousel({ data, title, mediaType }) {


    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 3000,
        swipeToSlide: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 1500,
                    autoplaySpeed: 3000,
                    arrows: false,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 1500,
                    autoplaySpeed: 3000,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div>
            <section id="new-release" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading">
                        <p className="sub-title hightlight">Online streaming</p>
                    </div>
                    <div className="heading control">
                        <h3 className="title center">{title}</h3>
                        <ul className="control-action">
                            <li className="action-item control">
                                <div className="double-btn btn rounded fw-6 outline-dark small bg-dark lowercase">
                                    <a onClick={previous}><i className="fa fa-angle-left"></i></a>
                                    <a onClick={next}><i className="fa fa-angle-right"></i></a>
                                </div>
                            </li>
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
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}>
                            {data.results.map((show: { id: number; title: string; overview: string }) => (
                                <CarouselCard name={""} first_air_date={""} poster_path={""} vote_average={0} release_date={""} key={show.id} mediaType={""} {...show} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </div>

    )
}