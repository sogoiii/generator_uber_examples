/*currently failing */

// var co = require('co'),
//     thunkify = require('thunkify'),
//     Promise = require("bluebird"),
//     Uber = require("../lib/uber_callbacks"),
//     configAll = require("../config");

// var locations = configAll.locations;


// var UberPromiseProducts = Promise.promisify(Uber.getProducts),
//     UberPromiseTime = Promise.promisify(Uber.getTime),
//     UberPromisePrice = Promise.promisify(Uber.getPrice);

// function* getUberInfo(options){ //get info method Size: [max 15 : min 5]
      
//     var modifedQuery = { //for products
//       latitude: options.queryObj.start_latitude,
//       longitude: options.queryObj.start_longitude
//     }    

//     var products = yield UberPromiseProducts({queryObj: modifedQuery}),
//         times = yield UberPromiseTime({queryObj: options.queryObj}),
//         prices = yield UberPromisePrice({queryObj: options.queryObj});

//     return {
//       products: products.products,
//       times: times.times,
//       prices: prices.prices 
//     };
// };//end of getUberInfo



// Promise.coroutine.addYieldHandler(function(v) {
//     if (typeof v === "function") {
//         var def = Promise.defer();
//         try { v(def.callback); } catch(e) { def.reject(e); }
//         return def.promise;
//     }
//     if (Array.isArray(v)) return Promise.all(v);  
//     if (v === void 0 && promise != null) {
//         return promise;
//     }
//     promise = null;
// });


// var queryObj = { //for times and prices
//   start_latitude: locations.vixletHQ.latitude,
//   start_longitude: locations.vixletHQ.longitude,
//   end_latitude: locations.UCLA.latitude,
//   end_longitude: locations.UCLA.longitude
// }

// var doOperations = Promise.coroutine(function* (options) {
//     var out = yield getUberInfo(options);
//     console.log(JSON.stringify(out, null, '\t') );
//     console.log("------------");
// });

// doOperations(queryObj);
