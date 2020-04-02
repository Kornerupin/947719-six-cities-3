class SignInForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);    
  }

  handleFormSubmit(evt) {
    evt.preventDefault();    
    const {onSubmitSignInForm, userLogin, userPassword} = this.props;

    onSubmitSignInForm({login: userLogin, password: userPassword});
  }

  handleLoginChange(evt) {
    const {setUserLogin} = this.props;    
    setUserLogin(evt.target.value);
  }

  handlePasswordChange(evt) {
    const {setUserPassword} = this.props;
    setUserPassword(evt.target.value);
  }

  render() {
      return (
        <form className="login__form form" action="" onSubmit={this.handleFormSubmit}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden" htmlFor="email">E-mail</label>
            <input className="login__input form__input" type="email" name="email" id="email" placeholder="Email" onChange={this.handleLoginChange}/>
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden" htmlFor="password">Password</label>
            <input className="login__input form__input" type="password" name="password" id="password" placeholder="Password" onChange={this.handlePasswordChange}/>
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
    );
  }
}

export default SignInForm;
