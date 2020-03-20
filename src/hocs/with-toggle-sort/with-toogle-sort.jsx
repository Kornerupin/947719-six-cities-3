const withToggleSort = (Component) => {
  class WithToggleSort extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isSortOpened: false
      };

      this._handleToggleSortClick = this._handleToggleSortClick.bind(this);
    }

    _handleToggleSortClick() {
      this.setState({
        isSortOpened: !this.state.isSortOpened
      });
    }

    render() {
      const {isSortOpened} = this.state;

      return (
        <Component
          {...this.props}
          isSortOpened={isSortOpened}
          onToggleSortClick={this._handleToggleSortClick}
        />
      );
    }
  }

  return WithToggleSort;
};

export default withToggleSort;
