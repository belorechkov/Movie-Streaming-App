export default function MovieCard() {

    return(
        <li className="movie-item card hoverable">
                        <div className="movie-image image rounded">
                            <a href="movie-detail.html">
                                <img src="./src/assets/images/movies/ucm_poster01.jpg" alt="movie"/>
                            </a>
                            <ul className="hover-box">
                                <li className="hover-item star-box">
                                    <span className="star rated">
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="star rated">
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="star rated">
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="star rated">
                                        <i className="fa fa-star"></i>
                                    </span>
                                    <span className="star">
                                        <i className="fa fa-star"></i>
                                    </span>
                                </li>
                                <li className="hover-item">
                                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                        className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
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
                                <a href="movie-detail.html" className="meta-title">The Perfect Match</a>
                                <span className="meta-text accent">2021</span>
                            </div>
                            <div className="meta">
                                <div className="meta-outline accent">4k</div>
                                <div className="meta-icon small">
                                    <i className="fa fa-clock-o"></i>
                                    128 min
                                </div>
                                <div className="meta-icon small">
                                    <i className="fa fa-thumbs-up"></i>
                                    3.5
                                </div>
                            </div>
                        </div>
                    </li>
    );
}