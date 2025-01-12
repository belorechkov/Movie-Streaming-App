import { Link } from "react-router-dom";

export default function CarouselCard({
    id,
    title,
    name,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
    mediaType,
    media_type,
}: {
    id: number;
    title: string;
    name: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    first_air_date: string;
    mediaType?: string;
    media_type?: string

}) {
    // Get year
    const dateStr = release_date ? release_date : first_air_date;
    const date = new Date(dateStr);
    const year = date.getFullYear();

    // Round rating
    const rating = vote_average.toFixed(1);

    // Type of media
    const type = mediaType || media_type
    const isMovie = (type === "movie") ? "movie" : "tv"


    return (
        <li className="movie-item card hoverable" style={{ maxWidth: "100%" }}>
            <div className="movie-image image rounded">
                <Link to={"/details" + "/" + isMovie + "/" + id}>
                    <img src={"https://image.tmdb.org/t/p/w500//" + poster_path} alt="movie" />
                    </Link>
                <ul className="hover-box">
                    <li className="hover-item star-box ">
                        <span className="star rated rating-box">
                            {/* <StarRating rating={vote_average} /> */}
                            <i className="fa fa-star rating-font-small"></i>
                            <p className="star rating-font-small">{rating}</p>
                        </span>
                    </li>
                    <li className="hover-item">
                        <Link to={"/details" + "/" + isMovie + "/" + id} className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
                            Watch now
                        </Link>
                    </li>
                    {/* <li className="hover-item">
                        <Link to={"/details" + "/" + isMovie + "/" + id} className="btn rounded outline fw-6 medium bg-dark">
                            Details
                        </Link>
                    </li> */}
                    {/* <li className="hover-item">
                        <button className="hightlight favorite-button" title="Favorite"><i className="fa fa-heart-o favorite-details-icon" aria-hidden="true"></i></button>
                    </li> */}
                </ul>
            </div>
            <div className="movie-meta card-meta">
                <div className="meta">
                    <a href="movie-detail.html" className="meta-title">
                        {title ? title : name}
                    </a>
                    <span className="meta-text accent">{year}</span>
                </div>
                <div className="meta">
                    {/* <div className="meta-outline accent">4k</div>
                    <div className="meta-icon small">
                        <i className="fa fa-clock-o"></i>
                        128 min
                    </div> */}
                    {/* <div className="meta-icon small">
                        <i className="fa fa-thumbs-up"></i>
                        {vote_average}
                    </div> */}
                </div>
            </div>
        </li>
    );
}
