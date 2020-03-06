import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import OfferDetail from '../offer-detail/offer-detail';
import {ActionCreator} from '../../reducer/actions';
import {OfferProperties} from '../../proptypes/properties';

const App = ({offers, offer, onOfferNameClick}) => {
  
  const _renderApp = () => {
    if (offer) {
      return (<OfferDetail offer={offer} offers={offers} onOfferNameClick={onOfferNameClick} />);
    }

    return (<Main offers={offers} onOfferNameClick={onOfferNameClick} />);
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
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)).isRequired,
  offer: PropTypes.object,
  onOfferNameClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  offer: state.offer
});

const mapDispatchToProps = (dispatch) => ({
  onOfferNameClick(offer) {
    dispatch(ActionCreator.showOffer(offer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
