import {connect} from 'react-redux';
import Header from './header';
import {getAuthStatus} from '../../reducer/user/selectors';

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
