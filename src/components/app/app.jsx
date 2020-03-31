import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import OfferDetail from '../offer-detail/offer-detail';
import {OfferProperties} from '../../proptypes/properties';

const App = (props) => {

  const {
    offers,
    offer,
    cities,
    city,
    currentCoordinate,
    onOfferMouseOver,
    onCityClick,
    currentFilter
  } = props;
  
  const _renderApp = () => {

    if (Object.keys(offer).length !== 0) {
      
      return (
        <OfferDetail
          offer={offer}
          offers={offers}
          onOfferMouseOver={(onOfferMouseOver)}
          currentCoordinate={currentCoordinate}
        />);
    }

    return (<Main
      offers={offers}
      cities={cities}
      city={city}
      currentCoordinate={currentCoordinate}
      onCityClick={onCityClick}
      currentFilter={currentFilter}
    />);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderApp()}
        </Route>
        <Route exact path="/dev-offer">
          <OfferDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  offer: PropTypes.object,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
  city: PropTypes.string.isRequired,
  currentCoordinate: PropTypes.array,
  currentCityCoords: PropTypes.array,
  onCityClick: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
};

export default App;
