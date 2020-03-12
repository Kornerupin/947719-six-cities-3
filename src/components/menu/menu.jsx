const Menu = ({ cities, onCityClick }) => {

  cities = cities ? cities.map((city, index) => {

    return (
      <li key={index.toString()} className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick={() => {
          onCityClick(city);
        }}>
          <span>{city}</span>
        </a>
      </li>
    );
  }).slice(0, 7) : false;

  return (
    <ul className="locations__list tabs__list">
      {
        cities
      }
    </ul>
  );
};

Menu.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
  onCityClick: PropTypes.func.isRequired,
};

export default Menu;
