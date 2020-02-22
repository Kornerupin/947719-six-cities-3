import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from '../main/main';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const { offers } = this.props;

    return ( <Main offers={offers} /> )
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          {/* <Route exact path="/dev-component">
            <Component />
          </Route> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
  )
};

export default App;
