import { useRef } from "react";
import Slider from "react-slick";

import CarouselCard from "../carousel-card/carousel-card";

type Show = {
    id: number;
    title: string;
    overview: string;
    first_air_date?: string;
    poster_path?: string;
    vote_average?: number;
    release_date?: string;
    media_type?: string
};

type CarouselProps = {
    data: {
        results: Show[];
    };
    title: string;
    mediaType: string;
};

export default function Carousel({ data, title, mediaType }: CarouselProps) {


    const sliderRef = useRef<Slider>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
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
                    <div className="heading control">
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
                    </div>
                    <div className="slick-track grid-card carousel">
                        <Slider
                            ref={sliderRef}
                            {...settings}>
                            {data.results.map((show: { id: number; title: string; overview: string }) => (
                                <CarouselCard name={""} first_air_date={""} poster_path={""} vote_average={0} release_date={""} key={show.id} mediaType={mediaType} media_type={""} {...show} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </div>

    )
}