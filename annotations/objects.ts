const profile = {
  name: 'san',
  age: 23,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

const { age }: { age: number} = profile // normal destructring, do not really need the annotation, but if you do, that also has to be destructred like it is now
const { coords: { lat, lng } }: {coords: { lat: number; lng: number} } = profile; 
