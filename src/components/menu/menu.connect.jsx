import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/data/data';
import NameSpace from '../../reducer/name-space';
import Menu from './menu';

const mapStateToProps = (state) => ({offers: state[NameSpace.DATA].offers});

const mapDispatchToProps = (dispatch) => {
  return {
    sortOffersByCity: (offers, city) => dispatch(ActionCreator.sortOffersByCity(offers, city))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
