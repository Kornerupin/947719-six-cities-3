import {connect} from 'react-redux';
import {Operation as UserOperation} from '../../reducer/user/user';
import SignInForm from './sign-in-form';

const mapStateToProps = (state) => ({
  userStatus: ``,
  userLogin: ``,
  userPassword: ``
});

const mapDispatchToProps = {
  setUserLogin: UserOperation.setUserLogin,
  setUserPassword: UserOperation.setUserPassword,
  onSubmitSignInForm: UserOperation.sendSignInData,
};

export {SignInForm};
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
