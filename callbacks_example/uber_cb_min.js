var async = require("async"),
    configAll = require("../config"),
    Uber = require("../lib/uber_callbacks")

var locations = configAll.locations;

var handleResponse = function(err, data, cb){
  if(err){
    return cb(err);
  } else {
    return cb(null, data);
  }
};//end of handleResponse

var getUberInfo = function(options, callback){ //get info method Size: [max 41 : min 22]

  async.series([

    //get products
    function(callback){

      var modifedQuery = {
        latitude: options.queryObj.start_latitude,
        longitude: options.queryObj.start_longitude
      }

      Uber.getProducts({queryObj: modifedQuery}, function(err, data){
          return handleResponse(err, data, callback);
      });
    }, //end of getProducts

    //get Time Estimate
    function(callback){
      Uber.getTime({queryObj: options.queryObj}, function(err, data){
        return handleResponse(err, data, callback);
      });
    }, //end of time Estimates

    //get Price Estimate
    function(callback){
      Uber.getPrice({queryObj: options.queryObj}, function(err, data){
        return handleResponse(err, data, callback);
      });
    }, //end of price Estimates

    ], function(anyErr, allResults) {

      var modifedOut = {
        products: allResults[0].products,
        times: allResults[1].times,
        prices: allResults[2].prices
      }

      return handleResponse(anyErr, JSON.stringify(modifedOut, null, '\t'), callback);
    });//end of async series
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