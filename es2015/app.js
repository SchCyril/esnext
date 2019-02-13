let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesID = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesID);
citiesID.push("tokyo");
console.log(citiesID)


function getWeather(cityID) {
    let city = cityID;
    let temp = 20;
    return { city, temp }

}
console.log(getWeather("paris"));

const weather = getWeather(favoriteCityId);
console.log(weather);

let {
    city: weatherCity,
    temp: weatherTemp
} = weather

console.log(weatherCity)
console.log(weatherTemp)

const [parisId, nycId, ...othersCitiesId] = citiesID;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length)


class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    toString() {
        return Trip.name + " " + "[" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + "]";
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');

console.log(parisTrip)
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());


class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        super.price = 0;
    }
    toString() {
        return "Free" + super.toString();
    }
}
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());

class TripService {

    constructor() {
        let set = new Set();
        set.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        set.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        set.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // Renvoyer l'objet Trip correspondant au nom du voyage en paramètre.

                if(!this.set.has(tripName)) {
                    reject(err); // en cas d'erreur
                } else {
                    resolve(id); // en cas de succès
                }
            });

                // TODO utiliser resolve et reject en fonction du résultat de la recherche


            }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        //'paris' -- > price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        let map = new Map();

        // alimenter
        map.set('paris', 100);
        map.set('rio-de-janeiro', 800);
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
        });
    }
}