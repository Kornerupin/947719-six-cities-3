const REVIEWS_MAX = 10;
export const sortReviews = (reviews) => reviews.slice().sort((a, b) => b.date - a.date).slice(0, REVIEWS_MAX);