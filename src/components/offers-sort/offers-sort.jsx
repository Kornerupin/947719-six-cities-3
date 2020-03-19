import {OptionType} from '../../consts';

const OffersSort = (props) => {
  const {onSortOptionClick, currentSortOption, onToggleSortClick, isSortOpened} = props;

  return (
    <form className="places__sorting" action="" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onToggleSortClick}>
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
                onClick={onToggleSortClick}>
                {option}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
};

OffersSort.propTypes = {
  isSortOpened: PropTypes.bool.isRequired,
  onToggleSortClick: PropTypes.func.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  currentSortOption: PropTypes.string.isRequired
};

export default OffersSort;
