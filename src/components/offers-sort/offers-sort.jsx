
const OffersSort = ({ onSortOptionsClick, isOpened }) => {
    
    return (
        <form className="places__sorting" action="" method="get">
            <span className="places__sorting-caption">Sort by&nbsp;</span>
            <span className="places__sorting-type" tabIndex={0} onClick={() => onSortOptionsClick(!isOpened) }>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                </svg>
            </span>
            <ul className={
                `places__options places__options--custom ${isOpened && `places__options--opened`}`
                } onClick={(evt) => console.log(evt.target) }>


                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
        </form>
    );
};

export default OffersSort;
