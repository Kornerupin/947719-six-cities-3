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
    this.hostIsPro = data.host.is_pro,
    this.reviews = [
      {
        avatar: `https://api.adorable.io/avatars/128/0.9912918678423135`,
        name: `Max`,
        rating: 4.1,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        time: 1569006474313
      },
      {
        avatar: `https://api.adorable.io/avatars/128/0.33908914729720996`,
        name: `Wax`,
        rating: 4.5,
        text: `It is my favorite hotel. I have been staying her for several years and can confirm that service level remains at the same high level.`,
        time: 1571598485610
      },
      {
        avatar: `https://api.adorable.io/avatars/128/0.06997580364137201`,
        name: `Rax`,
        rating: 3.8,
        text: `Emplacement parfait, beaucoup de commerces à proximité, le tout dans un lieu traditionnel et agréable, j'ai adoré mon court séjour et aimerait beaucoup y retourner un jour!`,
        time: 1574276894250
      }
    ]
  }

  static parse(data) {
    return new Adapter(data);
  }
}

export default Adapter;