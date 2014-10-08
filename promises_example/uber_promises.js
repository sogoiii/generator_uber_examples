var Promise = require("bluebird"),
    configAll = require("../config"),
    Uber = require("../lib/uber_callbacks")

var locations = configAll.locations;


var UberPromiseProducts = Promise.promisify(Uber.getProducts),
    UberPromiseTime = Promise.promisify(Uber.getTime),
    UberPromisePrice = Promise.promisify(Uber.getPrice);

function originatesFromRejection(e) {
    if (e == null) return false;
    return (e instanceof OperationalError) || (e.isOperational === true);
}

var getUberInfo = function(options, callback) { //get info method Size: [max 22 : min 16]

  var outObj = {},
      modifedQuery = { //for products
        latitude: options.queryObj.start_latitude,
        longitude: options.queryObj.start_longitude
      }

  UberPromiseProducts({
      queryObj: modifedQuery
    }).then(function(data){
      outObj.products = data.products
      return UberPromiseTime({queryObj: options.queryObj});
    }).then(function(data){
      outObj.times = data.times;
      return UberPromisePrice({queryObj: options.queryObj});
    }).then(function (data){
      outObj.prices = data.prices;
      return callback(null, JSON.stringify(outObj, null, '\t'));
    }).catch(originatesFromRejection, function(e){
      return callback(e);
    });
}//end of getUberInfo

var queryObj = { 
  start_latitude: locations.vixletHQ.latitude,
  start_longitude: locations.vixletHQ.longitude,
  end_latitude: locations.UCLA.latitude,
  end_longitude: locations.UCLA.longitude
}

getUberInfo({queryObj: queryObj}, function(err, data){
  console.log(err);
  console.log("------------");
  console.log(data);
});