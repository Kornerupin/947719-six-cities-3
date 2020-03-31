import {FilterType} from '../../consts';

const OffersFilter = (props) => {
  const {onFilterOptionClick, sortOffersByFilter, offers, currentFilter, onToggleFilterClick, isFilterOpened} = props;

  return (
    <form className="places__sorting" action="" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onToggleFilterClick}>
        {currentFilter}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={
        `places__options places__options--custom ${isFilterOpened && `places__options--opened`}`
      }>

        {
          Object.values(FilterType).map((option, index) => {
            return (
              <li
                key={`option-${index}`}
                className={`places__option ${option === currentFilter && `places__option--active`}`}
                tabIndex={0}
                onMouseOver={() => {
                  onFilterOptionClick(option);
                }}
                onClick={() => {
                  sortOffersByFilter(offers, currentFilter); onToggleFilterClick();
                }}>
                {option}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
};

OffersFilter.propTypes = {
  isFilterOpened: PropTypes.bool.isRequired,
};

export default OffersFilter;
