const MIN_RATING = 20;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getStars = (rating) => Math.round(rating) * MIN_RATING;

export const getFormatDate = (utc) => {
  const date = new Date(utc);

  return `${date.toLocaleString(`default`, {month: `long`})} ${date.getDate()}, ${date.getFullYear()}`;
};
