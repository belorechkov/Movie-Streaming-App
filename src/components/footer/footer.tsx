export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-box">
                    <nav className="footer-navbar">
                        <a href="../index.html" className="navbar-logo image">
                            <img src="./src/assets/images/logo.png" alt="Movfix" />
                        </a>
                        <div className="footer-navbar-wrap">
                            <ul className="navbar-box">
                                <li className="navbar-item footer">
                                    <a href="#" className="fw-7">Home</a>
                                </li>
                                <li className="navbar-item footer">
                                    <a href="#" className="fw-7">Movies</a>
                                </li>
                                <li className="navbar-item footer">
                                    <a href="#" className="fw-7">Tv shows</a>
                                </li>
                                <li className="navbar-item footer">
                                    <a href="#" className="fw-7">Favorites</a>
                                </li>
                            </ul>
                            <div className="search-box">
                                <input type="text" placeholder="Find Favorite Movie" />
                                <a href="#" className="search"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </footer>

            <div className="footer-copyright">
                <div className="footer-copyright-box">
                    <div className="copyright fw-5">
                        Copyright © 2024. All Rights Reserved By <a href="index.html" className="hightlight">StreamIt</a>
                    </div>
                    <div className="copyright fw-5">
                        This site does not store any files on our server, we are only linked to the media which is hosted on 3rd party services.
                    </div>
                </div>
            </div>
        </div>
    );
}