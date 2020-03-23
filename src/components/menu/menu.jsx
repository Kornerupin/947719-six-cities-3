const Menu = ({ cities, onCityClick }) => {

  return (
    <ul className="locations__list tabs__list">
      {
        cities ? cities.slice(0, 6).map((city, index) =>
          <li key={`menu-${index}`} className="locations__item">
            <a className="locations__item-link tabs__item" href="#"
              onClick={
                () => {
                  onCityClick(city);
                }
              }>
              <span>{city}</span>
            </a>
          </li>
        ) : <li className="locations__item">
          <a style={{ color: 'red' }}>Could not connect to server, please try again in a few minutes</a>
          </li>
      }
    </ul>
  );
};

Menu.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
  onCityClick: PropTypes.func.isRequired,
};

export default Menu;
