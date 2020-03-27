const withToggleFilter = (Component) => {
  class withToggleFilter extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFilterOpened: false
      };

      this._handleToggleSortClick = this._handleToggleSortClick.bind(this);
    }

    _handleToggleSortClick() {
      this.setState({
        isFilterOpened: !this.state.isFilterOpened
      });
    }

    render() {
      const {isFilterOpened} = this.state;

      return (
        <Component
          {...this.props}
          isFilterOpened={isFilterOpened}
          onToggleFilterClick={this._handleToggleSortClick}
        />
      );
    }
  }

  return withToggleFilter;
};

export default withToggleFilter;
