export default function Nav() {

    return (
        <div>
            <nav id="navbar" className="navbar-top">
                <div className="navbar-inner">
                    <div className="navbar-logo image">
                        <a href="index.html">
                            <img src="./src/assets/images/logo.png" alt="Movflx" />
                        </a>
                    </div>
                    <ul className="navbar-box">
                        <li className="navbar-item parent" data-active="home">
                            <a href="index.html">Home</a>
                            <ul className="dropdown">
                                <li className="dropdown-item"><a href="index.html">Home one</a></li>
                                <li className="dropdown-item"><a href="#">Home two</a></li>
                            </ul>
                        </li>
                        <li className="navbar-item parent" data-active="movie">
                            <a href="movie.html">Movies</a>
                            <ul className="dropdown">
                                <li className="dropdown-item"><a href="movie.html">Movie</a></li>
                                <li className="dropdown-item"><a href="movie-detail.html">Movie details</a></li>
                            </ul>
                        </li>
                        <li className="navbar-item" data-active="tv-show"><a href="tv-show.html">TV Shows</a></li>
                        <li className="navbar-item" data-active="favorites"><a href="contact.html">Favorites</a></li>
                    </ul>
                    <div className="navbar-action">
                        <div className="search-btn">
                            <a href="#"><i className="fa fa-search"></i></a>
                        </div>
                        <div className="language-btn">
                            <a href="#"><i className="fa fa-globe"></i></a>
                            <select name="language" id="language" title="Select language">
                                <option value="en" selected>en</option>
                                <option value="bg">bg</option>
                                <option value="bg">ro</option>
                                <option value="ro">gr</option>
                                <option value="ro">sr</option>
                                <option value="ro">mk</option>
                                <option value="tu">tr</option>
                                <option value="tu">al</option>
                            </select>
                        </div>
                        <a href="#" className="btn rounded outline bg-dark medium fw-7 space signin-btn">
                            Sign In
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </nav>

            <aside id="navbar-mobile">
                <div className="navbar-header">
                    <a href="../index.html" className="logo">
                        <img src="./src/assets/images/logo.png" alt="Movflx" />
                    </a>
                    <div className="close-btn"><i className="fa fa-times"></i></div>
                </div>
                <ul className="navbar-body">
                    <li className="navbar-body-item parent" data-active="home">
                        <a className="fw-5" href="../index.html">Home</a>
                        <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
                    </li>
                    <li className="navbar-body-item dropdown">
                        <ul className="dropdown-box">
                            <li className="dropdown-item mobile" data-active-child="home home-one"><a className="fw-5" href="../index.html">Home
                                One</a></li>
                            <li className="dropdown-item mobile" data-active-child="home home-two"><a className="fw-5" href="#">Home Two</a></li>
                        </ul>
                    </li>
                    <li className="navbar-body-item parent" data-active="movie">
                        <a className="fw-5" href="../movie.html">Movie</a>
                        <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
                    </li>
                    <li className="navbar-body-item dropdown">
                        <ul className="dropdown-box">
                            <li className="dropdown-item mobile" data-active-child="movie movie"><a className="fw-5" href="../movie.html">Movie</a></li>
                            <li className="dropdown-item mobile" data-active-child="movie movie-detail"><a className="fw-5" href="../movie-detail.html">Movie Details</a></li>
                        </ul>
                    </li>
                    <li className="navbar-body-item" data-active="tv-show">
                        <a className="fw-5" href="../tv-show.html">Tv Show</a>
                    </li>
                    <li className="navbar-body-item" data-active="pricing">
                        <a className="fw-5" href="../pricing.html">Pricing</a>
                    </li>
                    <li className="navbar-body-item parent" data-active="blog">
                        <a className="fw-5" href="../blog.html">Blog</a>
                        <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
                    </li>
                    <li className="navbar-body-item dropdown">
                        <ul className="dropdown-box">
                            <li className="dropdown-item mobile" data-active-child="blog blog"><a className="fw-5" href="../blog.html">Our Blog</a></li>
                            <li className="dropdown-item mobile" data-active-child="blog blog-detail"><a className="fw-5" href="../blog-detail.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li className="navbar-body-item" data-active="contact">
                        <a className="fw-5" href="../contact.html">Contacts</a>
                    </li>
                    <li className="navbar-body-item parent" data-active="account">
                        <a className="fw-5" href="#">Account</a>
                        <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
                    </li>
                    <li className="navbar-body-item dropdown">
                        <ul className="dropdown-box">
                            <li className="dropdown-item"><a className="fw-5" href="#">Sign in</a></li>
                            <li className="dropdown-item"><a className="fw-5" href="#">Register</a></li>
                        </ul>
                    </li>
                    <li className="navbar-body-item parent">
                        <p className="fw-5">More</p>
                        <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
                    </li>
                    <li className="navbar-body-item dropdown">
                        <ul className="dropdown-box">
                            <li className="dropdown-item"><a className="fw-5" href="#">Search movie</a></li>
                            <li className="dropdown-item"><a className="fw-5" href="#">Change language</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-footer">
                    <li className="navbar-footer-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li className="navbar-footer-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li className="navbar-footer-item"><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                    <li className="navbar-footer-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li className="navbar-footer-item"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                </ul>
            </aside>

            <div className="overlay"></div></div>
    );
}