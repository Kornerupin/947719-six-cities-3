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
  }

  render() {

    return (
      <div id="map" style={{height: `100%`}} ref={this.mapRef}></div>
    );
  }

  componentDidMount() {
    const map = leaflet.map(this.mapRef.current, {
      center: MapSettings.CITY,
      zoom: MapSettings.ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(MapSettings.CITY, MapSettings.ZOOM);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    this.props.coordinates.map((coordinates) => {
      return (coordinates === this.props.currrentCoordinates)
        ? leaflet.marker(coordinates, {icon: MapSettings.ICON_ACTIVE}).addTo(map)
        : leaflet.marker(coordinates, {icon: MapSettings.ICON}).addTo(map);
    });
  }
}

Map.defaultProps = {
  currrentCoordinates: []
};

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  currrentCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Map;
