import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import OfferDetail from '../offer-detail/offer-detail';
import {ActionCreator} from '../../reducer/actions';
import {OfferProperties} from '../../proptypes/properties';

const App = ({
  offers,
  offer,
  cities,
  city,
  activeCoordinate,
  onOfferMouseOver,
  onOfferNameClick,
  onCityClick,
  onSortOptionClick,
  currentSortOption
}) => {

  const filteredOffers = offers && offers.filter((element) => element.city === city);

  const _renderApp = () => {

    if (offer) {

      return (
        <OfferDetail
          offer={offer}
          offers={offers}
          onOfferMouseOver={(onOfferMouseOver)}
          onOfferNameClick={onOfferNameClick}
          activeCoordinate={activeCoordinate}
        />);
    }
    
    return (<Main
      offers={filteredOffers}
      cities={cities}
      city={city}
      activeCoordinate={activeCoordinate}
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
  activeCoordinate: PropTypes.array,
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
  activeCoordinate: state.activeCoordinate,
  currentSortOption: state.currentSortOption
});

const mapDispatchToProps = (dispatch) => ({
  onOfferMouseOver(activeCoordinate) {
    dispatch(ActionCreator.showActivePin(activeCoordinate));
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
