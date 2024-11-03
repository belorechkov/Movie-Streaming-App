import { Link } from "react-router-dom";
// import MovieCard from "../movie-card/movie-card";
import Trending from "../trending/trending";


export default function Movies() {

    return (
        <div>
            <section id="breadcrumb">
                <h2 className="title fw-7">
                    Our <span className="hightlight">Movies</span>
                </h2>
                <ul className="breadcumb-box">
                    <li className="breadcumb-item">
                        <Link to="/" className="fw-6">Home</Link>
                    </li>
                    <li className="breadcumb-item disable">
                        <Link to="/movies" className="fw-6">Movie</Link>
                    </li>
                </ul>
            </section>

            <section id="new-release" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading">
                        <p className="sub-title hightlight">Online streaming</p>
                    </div>
                    <div className="heading control">
                        <h3 className="title center">New Release Movies</h3>
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
                                <select name="type-movie" title="Choose type movie"
                                    className="btn fw-6 dropdownable rounded outline-dark small bg-gray lowercase" defaultValue='English'>
                                    <option value="english">English</option>
                                    <option value="english">Blueray</option>
                                    <option value="english">4k movie</option>
                                    <option value="english">Hd movie</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <Trending />
                    <div className="movie-wrapper">
                        <ul className="movie-box grid-layout grid-card">
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