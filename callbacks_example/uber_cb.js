var async = require("async"),
    configAll = require("../config"),
    Uber = require("../lib/uber_callbacks")

var locations = configAll.locations;

var getUberInfo = function(options, callback){ //get info method Size: [max 57 : min 49]

  async.series([

    //get products
    function(callback){

      var modifedQuery = {
        latitude: options.queryObj.start_latitude,
        longitude: options.queryObj.start_longitude
      }

      Uber.getProducts({queryObj: modifedQuery}, function(err, data){
        if(err){
          return callback(err, null);
        } else {
          return callback(null, data);
        }
      });
    }, //end of getProducts

    //get Time Estimate
    function(callback){
      Uber.getTime({queryObj: options.queryObj}, function(err, data){
        if(err){
          return callback(err, null);
        } else {
          return callback(null, data);
        }
      });
    }, //end of time Estimates

    //get Price Estimate
    function(callback){
      Uber.getPrice({queryObj: options.queryObj}, function(err, data){
        if(err){
          return callback(err, null);
        } else {
          return callback(null, data);
        }
      });
    }

    ], function(anyErr, allResults) {
      if(anyErr){
        return callback(anyErr);
      } else {

        var modifedOut = {
          products: allResults[0].products,
          times: allResults[1].times,
          prices: allResults[2].prices
        }

        return callback(null, JSON.stringify(modifedOut, null, '\t') );
      }
    });//end of async Waterfall
}//end of getUberInfo


var queryObj = {
  start_latitude: locations.home.latitude,
  start_longitude: locations.home.longitude,
  end_latitude: locations.vixletHQ.latitude,
  end_longitude: locations.vixletHQ.longitude
}

getUberInfo({queryObj: queryObj}, function(err, data){
  console.log(err);
  console.log("------------");
  console.log(data);
});