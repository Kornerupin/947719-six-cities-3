export const OfferProperties = {
  image: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  coords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

