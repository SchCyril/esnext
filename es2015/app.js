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
        this.set = new Set();
        this.set.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.set.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.set.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // Renvoyer l'objet Trip correspondant au nom du voyage en paramètre.

                const tripTrouve = Array.from(this.set).find(trip => trip.name === tripName);

                if (tripTrouve) {
                    resolve(tripTrouve + " " + "bien joue");
                } else {
                    reject(`no trip found with name ${tripName}`);
                }

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
        this.map = new Map();

        // alimenter
        this.map.set("Paris", 100);
        this.map.set("Rio de Janeiro", 800);
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                const price = this.prices.get(tripId);

                if(price) {
                    resolve(price);

                }else {
                    reject(`No price for trip id : ${tripId}`);
                }
            }, 2000)
        });
    }
}



let ts = new TripService();
let ps = new PriceService();
// ts.findByName('Paris').then(function(trip){
//     console.log(trip);
// }), function(error){
//     console.log(error);
// }

// ps.findPriceByTripId('paris').then(function(trip){
//     return ps.findPriceByTripId(trip.id);

// }, function(error){
//     console.log(error);
// }).then(function(price){
//     console.log(price);
// });


ts.findByName('Rio de Janeiro')
.then(trip => {
    console.log('Yeah', trip);
})
.catch(err => {
    console.log('oops', err)
})

ps.findPriceByTripId('nantes')
.then(price => console.log('yeah', price))
.catch(err => console.log('oops', err))

const tripName = 'Rio de Janeiro';
ts.findByName(tripName)
.then(trip => {
    return ps.findPriceByTripId(tripId)
})
.then(price => {
    console.log('Yeah', price)
})
.catch(err=> {
    console.log('oops', err)
})