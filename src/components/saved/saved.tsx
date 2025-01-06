import { Link } from "react-router-dom"


export default function Saved() {


    return (
        <div>
            <section id="breadcrumb">
                <h2 className="title fw-7">Saved<span className="hightlight"></span>
                </h2>
                <ul className="breadcumb-box">
                    <li className="breadcumb-item">
                        <Link to="/" className="fw-6">Home</Link>
                    </li>
                    <li className="breadcumb-item disable">
                        <Link to="/movies" className="fw-6">Favorites</Link>
                    </li>
                </ul>
            </section>

            <section id="new-release" className="suggestion">
                <div className="suggestion-box">
                    <div className="heading">
                        {/* <p className="sub-title hightlight">Online streaming</p> */}
                    </div>
                    <div className="heading control">
                        <h3 className="title center">Your Saves:</h3>
                        <ul className="control-action">
                            {/* <li className={(listType === "latest") ? "active" : ""}>
                                <a onClick={() => setListType("latest")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">Latest</a>
                            </li>
                            <li className={(listType === "popular") ? "active" : ""}>
                                <a onClick={() => setListType("trending")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">popular</a>
                            </li>
                            <li className={(listType === "top_rated") ? "active" : ""}>
                                <a onClick={() => setListType("top_rated")} className="btn fw-6 rounded outline-dark small bg-gray lowercase">Top-Rated</a>
                            </li> */}
                            {/* <li className="action-item">
                                <select name="type-movie" title="Choose type movie"
                                    className="btn fw-6 dropdownable rounded outline-dark small bg-gray lowercase" defaultValue='English'>
                                    <option value="english">English</option>
                                    <option value="english">Blueray</option>
                                    <option value="english">4k movie</option>
                                    <option value="english">Hd movie</option>
                                </select>
                            </li> */}
                        </ul>
                    </div>
                    <div className="empty-movie">
            <img src="/src/assets/images/empty.svg" alt="Empty movie" />
            <h3 className="title">You have not saved anything yet!</h3>
        </div>
                    <div className="movie-wrapper">
                        <ul className="movie-box grid-layout grid-card">
                            {/* {data.results.length > 0 ? (
                                data.results
                                    .filter((show: { poster_path: string }) => show.poster_path)
                                    .map((show: {
                                        id: number,
                                        title: string,
                                        overview: string
                                        name: string
                                        first_air_date: string
                                        type: string
                                        poster_path: string
                                        release_date: string
                                    }) => (
                                        <MovieCard vote_average={0} key={show.id} {...show} />

                                    ))
                            ) : (
                                <NoResult />
                            )} */}
                        </ul>
                    </div>
                    {/* <ul className="pagination">
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
                    </ul> */}
                </div>
            </section>

        </div>
    )
}