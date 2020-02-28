import leaflet from "leaflet";
import {OfferProperties} from "../../proptypes.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.Map = {
      CITY: [52.38333, 4.9],
      ZOOM: 12,
      ICON: leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      })
    };
  }

  render() {

    return (
      <div id="map" style={{width: `100%`, height: `100%`}} ref={this.mapRef}></div>
    );
  }

  componentDidMount() {
    const map = leaflet.map(this.mapRef.current, {
      center: this.Map.CITY,
      zoom: this.Map.ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(this.Map.CITY, this.Map.ZOOM);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    this.props.offers.map((offer) => leaflet.marker(offer.coords, this.Map.ICON).addTo(map));
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProperties))
};

export default Map;
