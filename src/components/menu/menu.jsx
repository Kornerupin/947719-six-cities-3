const Menu = React.memo(function Menu(props) {
  const {cities, city, onCityClick, offers, sortOffersByCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {
        cities ? cities.slice(0, 6).map((currentCity, index) =>
          <li key={`menu-${index}`} className="locations__item">
            <a className={`locations__item-link tabs__item ${(currentCity === city) && `tabs__item--active`}`} href="#"
              onClick={
                () => {
                  onCityClick(currentCity); sortOffersByCity(offers, currentCity);
                }
              }>
              <span>{currentCity}</span>
            </a>
          </li>
        ) : <li className="locations__item">
          <a style={{color: `red`}}>Could not connect to server, please try again in a few minutes</a>
        </li>
      }
    </ul>
  );
});

Menu.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
  onCityClick: PropTypes.func.isRequired,
};

export default Menu;
