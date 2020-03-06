import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Main from '../main/main';
import OfferDetail from '../offer-detail/offer-detail';
import {OfferProperties} from '../../properties';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.onOfferNameClick = this.onOfferNameClick.bind(this);
    console.log(this.props);
    
  }

  onOfferNameClick(offer) {
    this.setState(() => offer);
  }

  _renderApp() {
    const {offers} = this.props;

    if (this.state) {

      return (<OfferDetail offer={this.state} offers={offers} onOfferNameClick={this.onOfferNameClick}/>);
    }

    return (<Main offers={offers} onOfferNameClick={this.onOfferNameClick} />);
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <OfferDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties))
};

const mapStateToProps = (state) => ({
  offers: state.offersMock
});

export {App};
export default connect(mapStateToProps)(App);
