import leaflet from 'leaflet';

const ICON_SIZE = [30, 30];
const MAP = {
  CITY: [52.38333, 4.9],
  ZOOM: 12,
  ICON: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: ICON_SIZE
  }),
  ICON_ACTIVE: leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: ICON_SIZE
  })
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  render() {

    return (
      <div id="map" style={{ height: `100%` }} ref={this.mapRef}></div>
    );
  }

  componentDidMount() {
    const map = leaflet.map(this.mapRef.current, {
      center: MAP.CITY,
      zoom: MAP.ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(MAP.CITY, MAP.ZOOM);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    this.props.coordinates.map((coordinates) => {
      coordinates === this.props.currrentCoordinates
        ? leaflet.marker(coordinates, { icon: MAP.ICON_ACTIVE }).addTo(map)
        : leaflet.marker(coordinates, { icon: MAP.ICON }).addTo(map);
    });
  }
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default Map;
