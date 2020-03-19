import { OptionType } from '../../consts';

class OffersSort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSortOpened: false
    };

    this._handleToggleSortClick = this._handleToggleSortClick.bind(this);
  }

  _handleToggleSortClick() {
    this.setState({
      isSortOpened: !this.state.isSortOpened
    });
  }

  render() {
    const { onSortOptionClick, currentSortOption } = this.props;
    const { isSortOpened } = this.state;

    return (
      <form className="places__sorting" action="" method="get">
        <span className="places__sorting-caption">Sort by&nbsp;</span>
        <span className="places__sorting-type" tabIndex={0} onClick={this._handleToggleSortClick}>
          {currentSortOption}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={
          `places__options places__options--custom ${isSortOpened && `places__options--opened`}`
        }>

          {
            Object.values(OptionType).map((option, index) => {
              return (
                <li
                  key={`option-${index}`}
                  className={`places__option ${option === currentSortOption && `places__option--active`}`}
                  tabIndex={0}
                  onMouseOver={() => onSortOptionClick(option)}
                  onClick={this._handleToggleSortClick}>
                  {option}
                </li>
              );
            })
          }
        </ul>
      </form>
    );
  }
}

OffersSort.propTypes = {
  onSortOptionClick: PropTypes.func.isRequired,
  currentSortOption: PropTypes.string.isRequired
};

export default OffersSort;
