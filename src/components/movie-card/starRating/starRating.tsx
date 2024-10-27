
const StarRating = ({ rating }: { rating: number }) => {
    const maxRating = 10
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars


    return (
        <li className="hover-item star-box">
            {/* Full stars */}
            {[...Array(fullStars)].map((_, index) => (
                <span key={index} className="star rated">
                    <i className="fa fa-star"></i>
                </span>
            ))}
            {/* Half star */}
            {hasHalfStar &&
                <span className="star rated">
                    <i className="fa fa-star-half-o "></i>
                </span>}
            {/* Empty stars */}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} className="star rated">
                    <i className="fa fa-star-o"></i>
                </span>
            ))}
        </li>

    );
};

export default StarRating;
