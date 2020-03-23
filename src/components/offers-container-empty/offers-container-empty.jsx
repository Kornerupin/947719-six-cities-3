const OffersContainerEmpty = ({ city, isCity }) => {
  
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            {`We could not find any property${isCity ? `.` : city.length === 1 || ` available at the moment in ${city}`}`}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

OffersContainerEmpty.propTypes = {
  city: PropTypes.string.isRequired
};

export default OffersContainerEmpty;
