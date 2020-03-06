const CityList = ({ cities, onCityClick }) => {

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city) => {

          return (
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#" onClick={() => { 
                onCityClick( city ) }}>
                <span>{city}</span>
              </a>
            </li>
          )
        })
      }
    </ul>
  );
}

export default CityList;