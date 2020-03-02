import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import OfferDetail from '../offer-detail/offer-detail';
import {OfferProperties} from "../../properties.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.onCardNameClick = this.onCardNameClick.bind(this);
  }

  onCardNameClick(offer) {
    this.setState(() => (offer));
  }

  _renderApp() {
    const {offers} = this.props;

    if (this.state) {

      return (<OfferDetail offer={this.state} />);
    }

    return (<Main offers={offers} onCardNameClick={this.onCardNameClick} />);
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
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties)
  )
};

export default App;
