import {OptionType} from '../../consts';

const OffersSort = ({
  onSortClick,
  isSortOpened,
  onSortOptionClick,
  currentSortOption
}) => {

  return (
    <form className="places__sorting" action="" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => onSortClick(!isSortOpened)}>
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
                onClick={() => onSortClick(!isSortOpened)}>
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
  onSortClick: PropTypes.func.isRequired,
  isSortOpened: PropTypes.bool.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  currentSortOption: PropTypes.string.isRequired
};

export default OffersSort;
