import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from '../main/main';
import OfferDetail from '../offer-detail/offer-detail';
import { ActionCreator } from '../../reducer/actions';
import { OfferProperties } from '../../proptypes/properties';

const App = ({
  offers,
  offer,
  cities,
  city,
  activePin,
  onOfferMouseOver,
  onOfferNameClick,
  onCityClick,
  onSortClick,
  isSortOpened,
  onSortOptionClick,
  currentOption
}) => {

  const filteredOffers = offers ? offers.filter((element) => element.city === city ? element : false) : false;

  const _renderApp = () => {

    if (offer) {

      return (
        <OfferDetail
          offer={offer}
          offers={offers}
          onOfferMouseOver={(onOfferMouseOver)}
          onOfferNameClick={onOfferNameClick}
        />);
    }

    return (<Main
      offers={filteredOffers}
      cities={cities}
      city={city}
      activePin={activePin}
      onOfferMouseOver={onOfferMouseOver}
      onOfferNameClick={onOfferNameClick}
      onCityClick={onCityClick}
      onSortClick={onSortClick}
      isSortOpened={isSortOpened}
      onSortOptionClick={onSortOptionClick}
      currentOption={currentOption}
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
  offer: PropTypes.object,
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)),
  cities: PropTypes.arrayOf(PropTypes.string.isRequired),
  city: PropTypes.string.isRequired,
  onOfferNameClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  offer: state.offer,
  cities: state.cities,
  city: state.city,
  activePin: state.activePin,
  isSortOpened: state.isSortOpened,
  currentOption: state.currentOption
});

const mapDispatchToProps = (dispatch) => ({
  onOfferMouseOver(activePin) {
    dispatch(ActionCreator.showActivePin(activePin));
  },
  onOfferNameClick(offer) {
    dispatch(ActionCreator.showOffer(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onSortClick(isSortOpened) {
    dispatch(ActionCreator.toggleSortOptions(isSortOpened));
  },
  onSortOptionClick(currentOption) {
    dispatch(ActionCreator.changeSortOptions(currentOption));
  }
});

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
