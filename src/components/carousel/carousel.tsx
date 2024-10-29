// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import { Link, To } from "react-router-dom";

// function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
//     const { className, style, onClick } = props;
//     const updatedStyle = {
//         ...style,
//         display: "block",
//         background: "grey",
//         padding: "3px",
//         // borderRadius: "50%",
//         width: "25px",
//         height: "25px",
//     };
//     return (
//         <div
//             className={className}
//             style={updatedStyle}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
//     const { className, style, onClick } = props;
//     const updatedStyle = {
//         ...style,
//         display: "block",
//         background: "grey",
//         padding: "3px",
//         //   borderRadius: "50%",
//         width: "25px",
//         height: "25px",
//     };

//     return (
//         <div
//             className={className}
//             style={updatedStyle}
//             onClick={onClick}
//         />
//     );
// }

// export default function SimpleSlider({ slides, slidesToShow, centerPadding }) {

//     var settings = {
//         // className: "center",
//         dots: true,
//         infinite: true,
//         speed: 2000,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         slidesToShow: slidesToShow,
//         pauseOnHover: true,
//         centerMode: true,
//         centerPadding: centerPadding,
//         nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
//         prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true,
//                     arrows: false,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2,
//                     arrows: false,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: false,
//                 }
//             }
//         ],
//         appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => (
//             <ul
//                 style={{
//                     display: "inline-block",
//                     margin: "0 5px",
//                     padding: "5px",
//                     borderRadius: "25%",
//                     cursor: "pointer",
//                 }}
//             >
//                 {dots}
//             </ul>
//         ),
//     };


//     return (
//         <>
//             <Slider  {...settings} className="mb-10 rounded-xl relative">
//                 {slides.map((slide: { id: React.Key | null | undefined; link: To; backdrop_path: string | undefined; }) => (
//                     <div className="h-[16rem] py-[1rem] px-[0.25rem]" key={slide.id}>
//                         <Link to={slide.link}>
//                             <img
//                                 className="w-full rounded-xl hover:scale-110"
//                                 src={slide.backdrop_path}
//                                 alt={`slide ${slide.id}`}
//                             />
//                         </Link>
//                     </div>
//                 ))}
//             </Slider>
//         </>
//     );
// }
