export default function Details() {

    return(
        <div>
            <section id="movie-banner">
        <div className="movie-banner-box">
            <div className="image thumb-image">
                <img className="" src="./assets/images/movies/ucm_poster10.jpg" alt="movie"/>
                <a href="https://www.youtube.com/embed/R2gbPxeNk2E" className="play-btn trailer-source">
                    <img src="./assets/images/play_icon.png" alt="play_icon"/>
                </a>
            </div>
            <div className="content">
                <h5 className="sub-title fw-7 hightlight">New Espisodes</h5>
                <h2 className="title fw-7">
                    The Easy <span className="hightlight">Reach</span>
                </h2>
                <ul className="meta">
                    <li className="meta-item meta-square bg-light">pg 18</li>
                    <li className="meta-item meta-outline bg-dark">HD</li>
                    <li className="meta-item meta-text type">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                    </li>
                    <li className="meta-item meta-icon date">
                        <i className="fa fa-calendar"></i>
                        2021
                    </li>
                    <li className="meta-item meta-icon duration">
                        <i className="fa fa-clock-o"></i>
                        128 min
                    </li>
                </ul>
                <p className="desc fw-5">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are
                    many variations of passages of lorem Ipsum available, but the majority have suffered alteration in
                    some injected humour.</p>
                <div className="action prime-box">
                    <div className="share fw-5 prime-item">
                        <i className="fa fa-share-alt title"></i>
                        <a href="#" className="sub-title">Share</a>
                    </div>
                    <div className="prime-item">
                        <h6 className="fw-7 title">Prime video</h6>
                        <p className="fw-5 sub-title">Streaming Channels</p>
                    </div>
                    <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                        className="btn rounded outline prime bg-dark fw-7 trailer-source">
                        <i className="fa fa-play"></i>
                        Watch now
                    </a>
                </div>
            </div>
            <div className="btn-download">
                <a href="./assets/images/movies/ucm_poster03.jpg"
                    className="btn super bg-accent fw-5 contained image vertical" download="">
                    Download
                    <img src="./assets/images/download.svg" alt="download" />
                </a>
            </div>
        </div>
    </section>

    <section id="movie-detail">
        <div className="movie-detail-box">
            <div className="main-detail-box">
                <div className="main-detail">
                    <div className="heading">
                        <p className="sub-title hightlight text-left">Online streaming</p>
                        <div className="title-inner">
                            <h3 className="title small">Watch Full Episode</h3>
                            <div className="view-counter-box">
                                <span className="view-counter fw-5">2.7 million</span>
                                <span className="view-icon hightlight"><i className="fa fa-eye"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-box">
                        <div className="accordion">
                            <div className="accordion-header active">
                                <h6 className="title fw-7">Seasson 2</h6>
                                <span className="counter">
                                    5 Full Episodes
                                </span>
                            </div>
                            <div className="accordion-wrapper">
                                <ul className="accordion-inner">
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 1 - The World Is Purple</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 2 - Meaner Than Evil</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 3 - I Killed a Man Today</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 4 - Cowboys and Dreamers</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 5 - Freight Trains and Monsters</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="accordion">
                            <div className="accordion-header">
                                <h6 className="title fw-7">Seasson 1</h6>
                                <span className="counter">
                                    5 full Episodes
                                </span>
                            </div>
                            <div className="accordion-wrapper">
                                <ul className="accordion-inner">
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 1 - the World Is Purple</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 2 - Meaner Than Evil</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 3 - I Killed a Man Today</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 4 - Cowboys and Dreamers</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                    <li className="accordion-item">
                                        <a href="https://www.youtube.com/embed/R2gbPxeNk2E"
                                            className="title fw-6 trailer-source">
                                            <i className="fa fa-play"></i>
                                            <span className="movie-name">Episode 5 - Freight Trains and Monsters</span>
                                        </a>
                                        <span className="time fw-5">
                                            <i className="fa fa-clock-o hightlight"></i>
                                            25 Min
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-image image">
                    <img src="./assets/images/movies/ucm_poster02.jpg" alt="Movie Poster"/>
                </div>
            </div>
            <div className="description-box">
                <h3 className="title fw-7">
                    About <span className="hightlight">History</span>
                </h3>
                <p className="desc">
                    Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations
                    of passages of lorem Ipsum available, but the majority have suffered alteration in some injected
                    humour.There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                    isn't anything errassing hidden in the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                </p>
            </div>
        </div>
    </section>

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
                                <img src="./assets/images/movies/ucm_poster08.jpg" alt="movie"/>
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
                                <img src="./assets/images/movies/ucm_poster07.jpg" alt="movie"/>
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
                                <img src="./assets/images/movies/ucm_poster06.jpg" alt="movie"/>
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
                                <img src="./assets/images/movies/ucm_poster05.jpg" alt="movie"/>
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
                                <img src="./assets/images/movies/ucm_poster04.jpg" alt="movie"/>
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
                                <img src="./assets/images/movies/ucm_poster03.jpg" alt="movie"/>
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
        </div>
    );
}