import {connect} from 'react-redux';
import Header from './header';
import {getUserStatus} from '../../reducer/user/selectors';

const mapStateToProps = (state) => ({
  userStatus: getUserStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
