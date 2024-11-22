
export default function MediaWrapper({ MediaURL}: { MediaURL: string; }) {

    return (
        <section id="wrapper" className='trailer-wrapper show'>
            <button className="close-wrapper-button"></button>
            <div className="video-box">
                <iframe className="video" src={MediaURL} title="" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
        </section>
    );

    
}
