import Main from '../main/main';

const App = (props) => {
  const {cards} = props;

  return <Main cards={cards} />;
};

App.propTypes = {
  cards: PropTypes.array.isRequired
};

export default App;
