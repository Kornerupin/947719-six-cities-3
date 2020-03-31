import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/data/data';
import NameSpace from '../../reducer/name-space';
import Menu from './menu';

const mapStateToProps = (state) => ({
  cities: state[NameSpace.DATA].cities,
  city: state[NameSpace.DATA].city
});

export const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.setCity(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
