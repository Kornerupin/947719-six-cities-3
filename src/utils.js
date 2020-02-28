const MIN_RATING = 20;

export const getStars = (rating) => Math.round(rating) * MIN_RATING;
