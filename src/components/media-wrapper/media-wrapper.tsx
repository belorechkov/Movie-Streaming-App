export default function MediaWrapper({ MediaURL }: { MediaURL: string }) {
    console.log("MediaWrapper");

    return (
        <section className="trailer-wrapper show">
            <div className="video-box">
                <iframe className="video" src={MediaURL} title="" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </section>
    );
}