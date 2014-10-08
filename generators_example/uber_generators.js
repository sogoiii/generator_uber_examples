var co = require('co'),
    thunkify = require('thunkify'),
    Uber = require("../lib/uber_callbacks"),
    configAll = require("../config");

var locations = configAll.locations;


var uberGenProducts = thunkify(Uber.getProducts);
var uberGenTime = thunkify(Uber.getTime);
var uberGenPrice = thunkify(Uber.getPrice);

function* getUberInfo(options){ //get info method Size: [max 15 : min 5]
      
    var modifedQuery = { //for products
      latitude: options.queryObj.start_latitude,
      longitude: options.queryObj.start_longitude
    }    

    var products = yield uberGenProducts({queryObj: modifedQuery}),
        times = yield uberGenTime({queryObj: options.queryObj}),
        prices = yield uberGenPrice({queryObj: options.queryObj});

    return {
      products: products.products,
      times: times.times,
      prices: prices.prices 
    };
};//end of getUberInfo

var queryObj = { //for times and prices
  start_latitude: locations.vixletHQ.latitude,
  start_longitude: locations.vixletHQ.longitude,
  end_latitude: locations.UCLA.latitude,
  end_longitude: locations.UCLA.longitude
}

co(function *(options) {
    var out = yield getUberInfo(options);
    console.log(JSON.stringify(out, null, '\t') );
    console.log("------------");
}).call(this, {queryObj: queryObj});