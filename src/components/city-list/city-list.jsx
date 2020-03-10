const CityList = ({cities, onCityClick}) => {

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city, index) => {

          return (
            <li key={index.toString()} className="locations__item">
              <a className="locations__item-link tabs__item" href="#" onClick={() => {
                onCityClick(city);
              }}>
                <span>{city}</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
  onCityClick: PropTypes.func.isRequired,
};

export default CityList;
