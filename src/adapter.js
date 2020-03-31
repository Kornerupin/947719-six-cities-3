class Adapter {
  constructor(data) {
    this.id = data.id;
    this.city = data.city.name;
    this.cityCenter = [data.city.location.latitude, data.city.location.longitude];
    this.cityZoom = data.city.location.zoom;
    this.images = data.images.slice(0, 6);
    this.image = data.preview_image;
    this.name = data.title;
    this.isFavorite = data.is_favorite;
    this.isPremium = data.is_premium;
    this.rating = data.rating;
    this.type = `${data.type[0].toUpperCase()}${data.type.slice(1)}`;
    this.bedrooms = data.bedrooms;
    this.capacity = data.max_adults;
    this.price = data.price;
    this.facilities = data.goods;
    this.coordinates = [data.location.latitude, data.location.longitude];
    this.hostAvatar = data.host.avatar_url;
    this.hostName = data.host.name;
    this.hostMessage = data.description;
    this.hostIsPro = data.host.is_pro;
  }

  static parse(data) {
    return new Adapter(data);
  }
}

export default Adapter;
