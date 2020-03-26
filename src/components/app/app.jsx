import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import OfferDetail from '../offer-detail/offer-detail';
import {ActionCreator} from '../../reducer/actions';
import {OfferProperties} from '../../proptypes/properties';

const App = (props) => {

  const {
    offers,
    offer,
    cities,
    city,
    currentCoordinate,
    onOfferMouseOver,
    onOfferNameClick,
    onCityClick,
    onSortOptionClick,
    currentSortOption
  } = props;
      
  const filteredOffers = offers && offers.filter((element) => element.city === city);

  const _renderApp = () => {

    if (Object.keys(offer).length !== 0) {

      return (
        <OfferDetail
          offer={offer}
          offers={filteredOffers}
          onOfferMouseOver={(onOfferMouseOver)}
          onOfferNameClick={onOfferNameClick}
          currentCoordinate={currentCoordinate}
        />);
    }

    return (<Main
      offers={filteredOffers}
      cities={cities}
      city={city}
      currentCoordinate={currentCoordinate}
      onOfferMouseOver={onOfferMouseOver}
      onOfferNameClick={onOfferNameClick}
      onCityClick={onCityClick}
      onSortOptionClick={onSortOptionClick}
      currentSortOption={currentSortOption}
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
  onOfferMouseOver: PropTypes.func.isRequired,
  onOfferNameClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  currentSortOption: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  offer: state.offer,
  cities: state.cities,
  city: state.city,
  currentCoordinate: state.currentCoordinate,
  currentSortOption: state.currentSortOption
}
);

const mapDispatchToProps = (dispatch) => ({
  onOfferMouseOver(currentCoordinate) {
    dispatch(ActionCreator.showActivePin(currentCoordinate));
  },
  onOfferNameClick(offer) {
    dispatch(ActionCreator.showOffer(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onSortOptionClick(currentSortOption) {
    dispatch(ActionCreator.changeSortOptions(currentSortOption));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
