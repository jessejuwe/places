interface Location {
  lat: number;
  long: number;
}

class Place {
  id?: string;
  address: string;
  imageUri: string;
  location: Location;
  title: string;

  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: Location,
    id?: string
  ) {
    this.id = new Date().toString() + Math.random().toString();
    this.address = address;
    this.imageUri = imageUri;
    this.location = location;
    this.title = title;
  }
}

export default Place;
