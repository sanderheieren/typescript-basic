// import { User } from "./User";
// import { Company } from "./Company"; dont need these now bc of interface. GOOD!

// instructions to every other class
// on how to be an arguemnt to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map; // private to make sure other coders would not mess with it

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // best approach
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

  // ok approach, but not scalable
  // addMarker(mappable: User | Company): void {
  //   // ^^ (User | Company) this is not very scalebale, therefore use interface
  //   // in order to reference on either one from the 'mappable' argument, they BOTH need to have matching properties
  //   // i.e you cant reference catchPhrase on a company, because not both of them have it

  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }

  // bad approach, not scalable and too much dependency
  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }
}
