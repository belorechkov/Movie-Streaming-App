import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-box">
                    <nav className="footer-navbar">
                        <Link to="/" className="navbar-logo image">
                            <img src="/src/assets/images/logo.png" alt="Movfix" />
                        </Link>
                        <div className="footer-navbar-wrap">
                            <ul className="navbar-box">
                                <li className="navbar-item footer">
                                    <Link to="/" className="fw-7">Home</Link>
                                </li>
                                <li className="navbar-item footer">
                                    <Link to="/movies" className="fw-7">Movies</Link>
                                </li>
                                <li className="navbar-item footer">
                                    <Link to="/shows" className="fw-7">Tv shows</Link>
                                </li>
                                <li className="navbar-item footer">
                                    <Link to="/favorites" className="fw-7">Favorites</Link>
                                </li>
                            </ul>
                            {/* <div className="search-box">
                                <input type="text" placeholder="Find Favorite Movie" />
                                <Link to="/" className="search"><i className="fa fa-search"></i></Link>
                            </div> */}
                        </div>
                    </nav>
                </div>
            </footer>

            <div className="footer-copyright">
                <div className="footer-copyright-box">
                    <div className="copyright fw-5">
                        Copyright © 2024. All Rights Reserved By <Link to="/" className="hightlight">WatchBG</Link>
                    </div>
                    <div className="copyright fw-5">
                        This site does not store any files on our server, we are only linked to the media which is hosted on 3rd party services.
                    </div>
                </div>
            </div>
        </div>
    );
}