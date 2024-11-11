import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav({ setShowSearch }: { setShowSearch: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [sticky, setSticky] = useState(false)
    const [mobile, setMobile] = useState(false)

    const handleNavResponsiveness = () => {
        if (window.scrollY > 200) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavResponsiveness);
        return () => {
            window.addEventListener('scroll', handleNavResponsiveness)
        }
    });

    const handleShowSearch = () => {
        setShowSearch(prevState => !prevState)

    }

    const toggleMobileMenu = () => {
        setMobile(prevState => !prevState);
    }

    return (
        <div>
            <nav id="navbar" className={sticky ? 'scroll-down' : ''}>
                <div className="navbar-inner">
                    <div className="navbar-logo image">
                        <Link to='/'>
                            <img src="../src/assets/images/logo.png" alt="Movflx" />
                        </Link>
                    </div>
                    <ul className="navbar-box">
                        <li className="navbar-item" data-active="tv-show"><Link to="/">Home</Link></li>

                        <li className="navbar-item parent" data-active="movie">
                            <Link to="/movies">Movies</Link>
                            <ul className="dropdown">
                                <li className="dropdown-item"><Link to="movie.html">Movie</Link></li>
                                <li className="dropdown-item"><Link to="movie-detail.html">Movie details</Link></li>
                            </ul>
                        </li>
                        <li className="navbar-item" data-active="tv-show"><Link to="/shows">Tv Shows</Link></li>
                        <li className="navbar-item" data-active="favorites"><Link to="/saved">Saved</Link></li>
                    </ul>
                    <div className="navbar-action">
                        <div className="search-btn">
                            <a onClick={handleShowSearch}><i className="fa fa-search"></i></a>
                        </div>
                        <div className="language-btn">
                            <Link to="#"><i className="fa fa-globe"></i></Link>
                            <select name="language" id="language" title="Select language" defaultValue={'en'}>
                                <option value="en">en</option>
                                <option value="bg">bg</option>
                                <option value="bg">ro</option>
                                <option value="ro">gr</option>
                                <option value="ro">sr</option>
                                <option value="ro">mk</option>
                                <option value="tu">tr</option>
                                <option value="tu">al</option>
                            </select>
                        </div>
                        {/* <Link to="#" className="btn rounded outline bg-dark medium fw-7 space signin-btn">
                            Sign In
                        </Link> */}
                    </div>
                    <div className="navbar-menu" onClick={toggleMobileMenu}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </nav>

            <aside id="navbar-mobile" className={mobile ? 'show' : ''}>
                <div className="navbar-header">
                    <Link to="/" className="logo">
                        <img src="./src/assets/images/logo.png" alt="Movflx" />
                    </Link>
                    <div className="close-btn" onClick={toggleMobileMenu}><i className="fa fa-times"></i></div>
                </div>
                <ul className="navbar-body" onClick={toggleMobileMenu}>
                    <li className="navbar-body-item parent" data-active="home">
                        <Link className="fw-5" to="/">Home</Link>
                    </li>
                    <li className="navbar-body-item parent" data-active="movie">
                        <Link className="fw-5" to="/movies">Movies</Link>
                    </li>
                    <li className="navbar-body-item" data-active="tv-show">
                        <Link className="fw-5" to="/shows">Tv Shows</Link>
                    </li>

                    <li className="navbar-body-item parent" data-active="saved">
                        <Link className="fw-5" to="/saved">Saved</Link>
                    </li>
                    {/* <li className="navbar-body-item parent" data-active="account">
                        <Link className="fw-5" to="/">Account</Link>
                        <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
                    </li>
                    <li className="navbar-body-item dropdown">
                        <ul className="dropdown-box">
                            <li className="dropdown-item"><Link className="fw-5" to="/">Sign in</Link></li>
                            <li className="dropdown-item"><Link className="fw-5" to="/">Register</Link></li>
                        </ul>
                    </li>
                    <li className="navbar-body-item parent">
                        <p className="fw-5">More</p>
                        <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
                    </li>
                    <li className="navbar-body-item dropdown">
                        <ul className="dropdown-box">
                            <li className="dropdown-item"><Link className="fw-5" to="/">Search movie</Link></li>
                            <li className="dropdown-item"><Link className="fw-5" to="/">Change language</Link></li>
                        </ul>
                    </li> */}
                </ul>
                {/* <ul className="navbar-footer">
                    <li className="navbar-footer-item"><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                    <li className="navbar-footer-item"><Link to="/"><i className="fa fa-facebook"></i></Link></li>
                    <li className="navbar-footer-item"><Link to="/"><i className="fa fa-pinterest-p"></i></Link></li>
                    <li className="navbar-footer-item"><Link to="/"><i className="fa fa-instagram"></i></Link></li>
                    <li className="navbar-footer-item"><Link to="/"><i className="fa fa-youtube-play"></i></Link></li>
                </ul> */}
            </aside>

            <div className="overlay" onClick={toggleMobileMenu}></div></div>
    );
}