export const ReviewProperties = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export const OfferProperties = {
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};
