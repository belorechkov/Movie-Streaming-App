interface EpisodeDetails {
    air_date?: string
    episode_number: number
    id?: number
    name: string
    overview?: string
    runtime: number
    show_id: number
    still_path?: string
    vote_average: number
    season_number: number
}

export default function Episode({ show_id, episode_number, name, runtime, vote_average, season_number }: EpisodeDetails) {

    return (
        <li className="accordion-item">
            <a href={"https://vidsrc.xyz/embed/tv?tmdb=" + show_id + "&season=" + season_number + "&episode=" + episode_number} target="_blank" className="title fw-6 trailer-source">
                <i className="fa fa-play"></i>
                <span className="movie-name">Episode {episode_number} - {name}</span>
            </a>
            {(vote_average > 0) ?
                <span className="time fw-5">
                    <i className="fa fa-star-o hightlight"></i>
                    {vote_average.toFixed(1)}
                </span> : <></>}

            <span className="time fw-5">
                <i className="fa fa-clock-o hightlight"></i>
                {runtime} Min
            </span>
        </li>
    );
}