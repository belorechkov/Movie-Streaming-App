import React, { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Episode from "./episode/episode";

interface EpisodeDetails {
    air_date?: string;
    episode_number: number;
    id?: number;
    name: string;
    overview?: string;
    runtime: number;
    show_id: number;
    still_path?: string;
    vote_average: number;
    season_number: number
}

interface AccordionProps {
    episode_count: number;
    id: number;
    season_number: number;
}

const queryClient = new QueryClient();

export default function EpisodeAccordion({ episode_count, id, season_number }: AccordionProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <GetShowDetails episode_count={episode_count} id={id} season_number={season_number} />
        </QueryClientProvider>
    );
}

function GetShowDetails({ episode_count, id, season_number }: AccordionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsExpanded((prev) => !prev);
    };

    const URL = `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?language=en-US`;

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDlhM2FkYmNiYjA3YWI2Y2M4NjVhOTc1MWY3NWZhNyIsIm5iZiI6MTcyOTY5OTcxMC43NjM3MjYsInN1YiI6IjY3MGQxYTk3OWYzNTMxZTZiMjZiZTIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53-1Zsz27wZ-hYeCWTXCByILOoide6JJI73JPLqZVJM",
        },
    };

    const { isPending, error, data } = useQuery({
        queryKey: [season_number],
        queryFn: async () => {
            const response = await fetch(URL, options);
            return response.json();
        },
    });

    // Dynamically set the maxHeight once the content is fetched

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.setProperty(
                "--content-height",
                `${contentRef.current.scrollHeight}px`
            );
        }
    }, [data]); // Recalculate when data changes

    if (isPending) return "Loading...";
    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="accordion">
            <div
                className={`accordion-header ${isExpanded ? "active" : ""}`}
                onClick={toggleAccordion}
            >
                <h6 className="title fw-7">Season {season_number}</h6>
                <span className="counter">{episode_count} Episodes</span>
            </div>
            <div className="accordion-wrapper" ref={contentRef} style={{
                maxHeight: isExpanded ? "var(--content-height)" : "0px",
            }}>
                <ul className="accordion-inner">
                    {data.episodes.map((episode: EpisodeDetails) => (
                        <Episode
                            show_id={episode.show_id}
                            episode_number={episode.episode_number}
                            name={episode.name}
                            runtime={episode.runtime}
                            vote_average={episode.vote_average}
                            season_number={episode.season_number}
                            key={episode.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
