// import React, { useRef } from "react";
import Slider from "react-slick";

import CarouselCard from "../carousel-card/carousel-card";

export default function Carousel({ data }) {


    const settings = {
        dots: false,
        arrows: true,
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
        <Slider {...settings}>
            {data.results.map((show: { id: number; title: string; overview: string }) => (
                <CarouselCard name={""} first_air_date={""} poster_path={""} vote_average={0} release_date={""} key={show.id} {...show} />
            ))}
        </Slider>
    )
}