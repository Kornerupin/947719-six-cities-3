class Adapter {
    constructor(data) {
        this.id = data.id;
        this.city = data.city.name;
        this.image = data.images;
        this.preview_image = data.preview_image;
        this.name = data.title;
        this.is_favorite = data.is_favorite;
        this.is_premium = data.is_premium;
        this.rating = data.rating;
        this.type = data.type;
        this.bedrooms = this.bedrooms;
        this.max_adults = this.max_adults;
        this.price = data.price;
        this.goods = data.goods;
        this.coordinates = [data.location.latitude, data.location.longitude];
        this.description = data.description;
        this.reviews = [
          {
            id: data.host.id,
            avatar: data.host.avatar_url,
            name: data.host.name,
            is_pro: data.host.is_pro,
            rating: 4.1,
            text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
            time: 1569006474313
          },
          {
            id: ++data.host.id,
            avatar: `https://api.adorable.io/avatars/128/0.33908914729720996`,
            name: `Wax`,
            is_pro: data.host.is_pro,
            rating: 4.5,
            text: `It is my favorite hotel. I have been staying her for several years and can confirm that service level remains at the same high level.`,
            time: 1571598485610
          },
          {
            id: ++data.host.id,
            avatar: `https://api.adorable.io/avatars/128/0.06997580364137201`,
            name: `Rax`,
            is_pro: data.host.is_pro,
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