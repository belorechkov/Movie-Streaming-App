
export default function Home() {


    return (
        <div>
            <section id="banner">
                <div className="banner-box">
                    <h3 className="hightlight fw-7">Watch</h3>
                    <h2 className="title fw-7 text-white">
                        Unlimited
                        <span className="hightlight"> Movies</span>,
                        TVs Shows, & More.
                    </h2>
                    {/* <ul className="banner-meta meta">
                        <li className="meta-item meta-square bg-light">pg 18</li>
                        <li className="meta-item meta-outline bg-dark">HD</li>
                        <li className="meta-item meta-text type">
                            <a href="#">Romance</a>
                            <a href="#">Drama</a>
                        </li>
                        <li className="meta-item meta-icon date">
                            <div>
                                <i className="fa fa-calendar"></i>
                                2021
                            </div>
                            <div>
                                <i className="fa fa-clock-o"></i>
                                128 min
                            </div>
                        </li>
                    </ul> */}
                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                        className="btn rounded outline large bg-dark fw-7 space trailer-source">
                        <i className="fa fa-play"></i>
                        Watch now
                    </a>
                </div>
            </section>

            <section id="coming-movie" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading">
                        <p className="sub-title hightlight">Online streaming</p>
                    </div>
                    <div className="heading control">
                        <h3 className="title center">Upcoming movies</h3>
                        <ul className="control-action">
                            <li className="action-item active">
                                <a href="#" className="btn rounded fw-6 outline-dark small bg-dark lowercase">TV shows</a>
                            </li>
                            <li className="action-item">
                                <a href="#" className="btn rounded fw-6 outline-dark small bg-dark lowercase">Movies</a>
                            </li>
                            <li className="action-item">
                                <a href="#" className="btn rounded fw-6 outline-dark small bg-dark lowercase">Anime</a>
                            </li>
                            <li className="action-item control">
                                <div className="double-btn btn rounded fw-6 outline-dark small bg-dark lowercase">
                                    <a href="#"><i className="fa fa-angle-left"></i></a>
                                    <a href="#"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="movie-wrapper">
                        <ul className="movie-box grid-card">
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster01.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster02.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster03.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster04.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster05.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster06.jpg" alt="movie" />
                                    </a>
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
                </div>
            </section>

            {/* <section id="download-service">
                <div className="service-box">
                    <div className="service-item service-poster">
                        <img src="./src/assets/images/poster.jpg" alt="poster"/>
                            <a href="assets/images/poster.jpg" className="btn super bg-accent fw-5 contained image vertical download-btn" download>
                                Download
                                <img src="./src/assets/images/download.svg" alt="download"/>
                            </a>
                    </div>
                    <div className="service-item service-content">
                        <div className="content-heading heading">
                            <div className="sub-title decoration hightlight">
                                Our services
                            </div>
                            <h2 className="title">Download Your Shows Watch Offline.</h2>
                        </div>
                        <p className="desc">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many
                            variations of passages of lorem Ipsum available, but the majority have suffered alteration in some
                            injected humour.</p>
                        <ul className="content-meta">
                            <li className="content-meta-item">
                                <div className="meta-icon">
                                    <i className="favicon favicon-television"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title">Enjoy on Your TV.</h4>
                                    <p className="desc">Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod
                                        tempor.</p>
                                </div>
                            </li>
                            <li className="content-meta-item">
                                <div className="meta-icon">
                                    <i className="favicon favicon-video-camera"></i>
                                </div>
                                <div className="content">
                                    <h4 className="title">Watch Everywhere.</h4>
                                    <p className="desc">Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod
                                        tempor.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section> */}

            <section id="top-rated">
                <div className="top-rated-box">
                    <div className="heading">
                        <div className="sub-title hightlight center">Online streaming</div>
                        <h3 className="title center">Top rated movies</h3>
                        <ul className="group-btn">
                            <li className="btn-item active">
                                <a href="#" className="btn text fw-7 light bg-black">
                                    TV shows
                                </a>
                            </li>
                            <li className="btn-item">
                                <a href="#" className="btn text fw-7 light bg-black">
                                    Movies
                                </a>
                            </li>
                            <li className="btn-item">
                                <a href="#" className="btn text fw-7 light bg-black">
                                    Documentary
                                </a>
                            </li>
                            <li className="btn-item">
                                <a href="#" className="btn text fw-7 light bg-black">
                                    Sports
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="movie-box grid-card">
                        <li className="movie-item card">
                            <div className="movie-image image rounded">
                                <a href="#">
                                    <img src="./src/assets/images/movies/ucm_poster01.jpg" alt="movie" />
                                </a>
                            </div>
                            <div className="movie-meta card-meta">
                                <div className="meta">
                                    <a href="movie-detail.html" className="meta-title">The Perfect Match</a>
                                    <span className="meta-text accent">2021</span>
                                </div>
                                <div className="meta">
                                    <div className="meta-outline accent">hd</div>
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
                        <li className="movie-item card">
                            <div className="movie-image image rounded">
                                <a href="#">
                                    <img src="./src/assets/images/movies/ucm_poster02.jpg" alt="movie" />
                                </a>
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
                        <li className="movie-item card">
                            <div className="movie-image image rounded">
                                <a href="#">
                                    <img src="./src/assets/images/movies/ucm_poster03.jpg" alt="movie" />
                                </a>
                            </div>
                            <div className="movie-meta card-meta">
                                <div className="meta">
                                    <a href="movie-detail.html" className="meta-title">The Perfect Match</a>
                                    <span className="meta-text accent">2021</span>
                                </div>
                                <div className="meta">
                                    <div className="meta-outline accent">Hq</div>
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
                        <li className="movie-item card">
                            <div className="movie-image image rounded">
                                <a href="#">
                                    <img src="./src/assets/images/movies/ucm_poster04.jpg" alt="movie" />
                                </a>
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
                        <li className="movie-item card">
                            <div className="movie-image image rounded">
                                <a href="#">
                                    <img src="./src/assets/images/movies/ucm_poster05.jpg" alt="movie" />
                                </a>
                            </div>
                            <div className="movie-meta card-meta">
                                <div className="meta">
                                    <a href="movie-detail.html" className="meta-title">The Perfect Match</a>
                                    <span className="meta-text accent">2021</span>
                                </div>
                                <div className="meta">
                                    <div className="meta-outline accent">3d</div>
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
                        <li className="movie-item card">
                            <div className="movie-image image rounded">
                                <a href="#">
                                    <img src="./src/assets/images/movies/ucm_poster06.jpg" alt="movie" />
                                </a>
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
                        <li className="movie-item card">
                            <div className="movie-image image rounded">
                                <a href="#">
                                    <img src="./src/assets/images/movies/ucm_poster07.jpg" alt="movie" />
                                </a>
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
                        <li className="movie-item card">
                            <div className="movie-image image rounded">
                                <a href="#">
                                    <img src="./src/assets/images/movies/ucm_poster08.jpg" alt="movie" />
                                </a>
                            </div>
                            <div className="movie-meta card-meta">
                                <div className="meta">
                                    <a href="movie-detail.html" className="meta-title">The Perfect Match</a>
                                    <span className="meta-text accent">2021</span>
                                </div>
                                <div className="meta">
                                    <div className="meta-outline accent">8k</div>
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
            </section>

            {/* <section id="live-movie">
                <div className="live-movie-box">
                    <div className="content">
                        <div className="heading">
                            <div className="sub-title decoration text-dark">
                                Online streaming
                            </div>
                            <h3 className="title black">
                                Live Movie & TV Shows For Friends & Family
                            </h3>
                        </div>
                        <p className="desc dark fw-5">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are
                            many
                            variations of passages of lorem Ipsum available, but the majority have suffered alteration.
                        </p>
                        <div className="info">
                            <h3 className="fw-7">hd 4k</h3>
                            <div className="counter">
                                <h4 className="fw-7">
                                    <span className="value">
                                        <ul id="count-up">
                                            <li>0</li>
                                            <li>1</li>
                                            <li>2</li>
                                        </ul>
                                        <ul id="count-down">
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                            <li>6</li>
                                            <li>7</li>
                                            <li>8</li>
                                            <li>9</li>
                                            <li>0</li>
                                        </ul>
                                    </span>
                                    <span>K+</span>
                                </h4>
                                <p className="fw-7">Active Customer</p>
                            </div>
                        </div>
                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                            className="btn rounded fw-7 outline large bg-accent space trailer-source">
                            <i className="fa fa-play"></i>
                            Watch now
                        </a>

                    </div>
                    <div className="image">
                        <img src="./src/assets/images/live_img.png" alt="live-movie"/>
                    </div>
                </div>
            </section> */}

            <section id="best-serie" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading">
                        <p className="sub-title hightlight center">Best tv series</p>
                    </div>
                    <div className="heading">
                        <h3 className="title center">World Best TV Series</h3>
                    </div>
                    <div className="movie-wrapper">
                        <ul className="movie-box grid-card">
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster08.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card ">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster07.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster06.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster05.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster04.jpg" alt="movie" />
                                    </a>
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
                            <li className="movie-item card">
                                <div className="movie-image image rounded">
                                    <a href="movie-detail.html">
                                        <img src="./src/assets/images/movies/ucm_poster03.jpg" alt="movie" />
                                    </a>
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
                </div>
            </section>

            <div data-component="footer" className="root-inner" load-html="./src/components/footer.html"></div>

            <div data-component="trailer-wrapper" className="root-inner" load-html="../src/components/trailer-wrapper.html"></div>

            <div data-component="search-master" className="root-inner" load-html="../src/components/search-master.html"></div>

            <div data-component="scroll-top" className="root-inner" load-html="../src/components/scroll-top.html"></div>

            <script src="../src/source/js/main.js"></script>
            <script>
                includeHTML();
            </script>
        </div>
    )
}