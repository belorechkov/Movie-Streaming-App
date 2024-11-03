export default function CarouselCard({
    // id,
    title,
    name,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
}: {
    id: number;
    title: string;
    name: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    first_air_date: string;
}) {

    // Get year
    const dateStr = release_date ? release_date : first_air_date;
    const date = new Date(dateStr);
    const year = date.getFullYear();

    // Round rating
    const rating = vote_average.toFixed(1)

    return (
        <li className="movie-item card hoverable" style={{ maxWidth: "100%" }}>
            <div className="movie-image image rounded">
                <a href="movie-detail.html">
                    <img
                        src={"https://image.tmdb.org/t/p/original//" + poster_path}
                        alt="movie"
                    />
                </a>
                <ul className="hover-box">
                    <li className="hover-item star-box " >
                        <span className="star rated rating-box" >
                            {/* <StarRating rating={vote_average} /> */}
                            <i className="fa fa-star rating-font-small"></i>
                            <p className="star rating-font-small">{rating}</p>
                        </span>
                    </li>
                    <li className="hover-item">
                        <a
                            href="https://www.youtube.com/embed/R2gbPxeNk2E"
                            className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source"
                        >
                            Watch now
                        </a>
                    </li>
                    <li className="hover-item">
                        <a href="movie-detail.html" className="btn rounded outline fw-6 medium bg-dark">
                            Details
                        </a>
                    </li>
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
