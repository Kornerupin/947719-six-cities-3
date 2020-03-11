import leaflet from 'leaflet';

const MapSettings = {
  CITY: [52.38333, 4.9],
  ZOOM: 12,
  ICON: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  }),
  ICON_ACTIVE: leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  })
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    console.log(this.props);

  }

  render() {

    return (
      <div id="map" style={{ height: `100%` }} ref={this.mapRef}></div>
    );
  }

  componentDidMount() {
    this._map = leaflet.map(this.mapRef.current, {
      center: MapSettings.CITY,
      zoom: MapSettings.ZOOM,
      zoomControl: false,
      marker: true
    });

    this._map.setView(MapSettings.CITY, MapSettings.ZOOM);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this._map);

    this._layerGroup = leaflet.layerGroup().addTo(this._map);

    this.props.coordinates.map((coordinates) => {

      return (coordinates === this.props.currentCoordinates)
        ? leaflet.marker(coordinates, { icon: MapSettings.ICON_ACTIVE }).addTo(this._layerGroup)
        : leaflet.marker(coordinates, { icon: MapSettings.ICON }).addTo(this._layerGroup);
    });
  }

  componentDidUpdate({ activePin }) {

    this._layerGroup.clearLayers();

    this.props.coordinates.map((coordinates) => {

      return (coordinates === this.props.currentCoordinates)
        ? leaflet.marker(coordinates, { icon: MapSettings.ICON_ACTIVE }).addTo(this._layerGroup)
        : leaflet.marker(coordinates, { icon: MapSettings.ICON }).addTo(this._layerGroup);
    });

    if (activePin) {

      return leaflet.marker(activePin, { icon: MapSettings.ICON_ACTIVE }).addTo(this._layerGroup);
    }
  }

  componentWillUnmount() {
    this._map.remove();
  }
}

Map.defaultProps = {
  currentCoordinates: []
};

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  currentCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Map;
