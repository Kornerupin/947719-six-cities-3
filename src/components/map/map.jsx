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
    this.markers = leaflet.layerGroup();
  }

  componentDidMount() {
    const {coordinates, currentCoordinate} = this.props;

    this._map = new leaflet.Map(this.mapRef.current, {
      center: MapSettings.CITY,
      zoom: MapSettings.ZOOM,
      zoomControl: false,
      marker: true
    });

    this._map.setView(MapSettings.CITY, MapSettings.ZOOM);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this._map);

    coordinates.map((coordinate) => {

      return (coordinate === currentCoordinate)
        ? leaflet.marker(coordinate, {icon: MapSettings.ICON_ACTIVE}).addTo(this.markers)
        : leaflet.marker(coordinate, {icon: MapSettings.ICON}).addTo(this.markers);
    });

    this.markers.addTo(this._map);
  }

  componentDidUpdate() {
    this.markers.clearLayers();

    const {coordinates, activeCoordinate} = this.props;

    coordinates.map((coordinate) => {

      return (coordinate === activeCoordinate)
        ? leaflet.marker(activeCoordinate, {icon: MapSettings.ICON_ACTIVE}).addTo(this.markers)
        : leaflet.marker(coordinate, {icon: MapSettings.ICON}).addTo(this.markers);
    });

    this.markers.addTo(this._map);
  }

  componentWillUnmount() {
    this._map.remove();
  }

  render() {

    return (
      <div id="map" style={{height: `100%`}} ref={this.mapRef}></div>
    );
  }

}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  activeCoordinate: PropTypes.array,
  currentCoordinate: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Map;
