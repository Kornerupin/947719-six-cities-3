import Main from '../main/main';

const App = (props) => {
  const {offers} = props;

  return <Main offers={offers} />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
