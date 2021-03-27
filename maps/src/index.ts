import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const map = new CustomMap("map");

// behind the scenes, TS is checking the type to user and company
// to check if it is 'mappable' and can be used
map.addMarker(user);
map.addMarker(company);
