export default function Shows() {

    return (
        <div>
            <section id="breadcrumb">
        <h2 className="title fw-7">
            Tv <span className="hightlight">Show</span>
        </h2>
        <ul className="breadcumb-box">
            <li className="breadcumb-item">
                <a href="index.html" className="fw-6">Home</a>
            </li>
            <li className="breadcumb-item disable">
                <a href="#" className="fw-6">Tv show</a>
            </li>
        </ul>
    </section>

    <section id="tv-show" className="suggestion">
        <div className="suggestion-box">
            <div className="heading">
                <p className="sub-title hightlight">Online streaming</p>
            </div>
            <div className="heading control">
                <h3 className="title center">New Tv Show</h3>
                <ul className="control-action">
                    <li className="action-item active">
                        <a href="#" className="btn fw-6 rounded outline-dark small bg-gray lowercase">Animation</a>
                    </li>
                    <li className="action-item">
                        <a href="#" className="btn fw-6 rounded outline-dark small bg-gray lowercase">Movies</a>
                    </li>
                    <li className="action-item">
                        <a href="#" className="btn fw-6 rounded outline-dark small bg-gray lowercase">Romantic</a>
                    </li>
                    <li className="action-item">
                        <select name="type-movie" title="Choose type movie" className="btn fw-6 dropdownable rounded outline-dark small bg-gray lowercase">
                            <option value="english" selected>English</option>
                            <option value="english">Blueray</option>
                            <option value="english">4k movie</option>
                            <option value="english">Hd movie</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="movie-wrapper">
                <ul className="movie-box grid-layout grid-card">
                    <li className="movie-item card hoverable">
                        <div className="movie-image image rounded">
                            <a href="movie-detail.html">
                                <img src="./assets/images/movies/ucm_poster01.jpg" alt="movie"/>
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
                                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E" className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
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
                    <li className="movie-item card hoverable">
                        <div className="movie-image image rounded">
                            <a href="movie-detail.html">
                                <img src="./assets/images/movies/ucm_poster02.jpg" alt="movie"/>
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
                                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E" className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
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
                    <li className="movie-item card hoverable">
                        <div className="movie-image image rounded">
                            <a href="movie-detail.html">
                                <img src="./assets/images/movies/ucm_poster03.jpg" alt="movie"/>
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
                                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E" className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
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
                    <li className="movie-item card hoverable">
                        <div className="movie-image image rounded">
                            <a href="movie-detail.html">
                                <img src="./assets/images/movies/ucm_poster04.jpg" alt="movie"/>
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
                                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E" className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
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
                    <li className="movie-item card hoverable">
                        <div className="movie-image image rounded">
                            <a href="movie-detail.html">
                                <img src="./assets/images/movies/ucm_poster05.jpg" alt="movie"/>
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
                                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E" className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
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
                    <li className="movie-item card hoverable">
                        <div className="movie-image image rounded">
                            <a href="movie-detail.html">
                                <img src="./assets/images/movies/ucm_poster06.jpg" alt="movie"/>
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
                                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E" className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
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
                    <li className="movie-item card hoverable">
                        <div className="movie-image image rounded">
                            <a href="movie-detail.html">
                                <img src="./assets/images/movies/ucm_poster07.jpg" alt="movie"/>
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
                                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E" className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
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
                    <li className="movie-item card hoverable">
                        <div className="movie-image image rounded">
                            <a href="movie-detail.html">
                                <img src="./assets/images/movies/ucm_poster08.jpg" alt="movie"/>
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
                                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E" className="btn rounded outline  fw-6 medium bg-accent hover-accent trailer-source">
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
                </ul>
            </div>
            <ul className="pagination">
                <li className="pagination-item active">
                    <a href="#" className="fw-6">1</a>
                </li>
                <li className="pagination-item">
                    <a href="#" className="fw-6">2</a>
                </li>
                <li className="pagination-item">
                    <a href="#" className="fw-6">3</a>
                </li>
                <li className="pagination-item">
                    <a href="#" className="fw-6">4</a>
                </li>
                <li className="pagination-item">
                    <a href="#" className="fw-6">Next</a>
                </li>
            </ul>
        </div>
    </section>
        </div>
    );
}