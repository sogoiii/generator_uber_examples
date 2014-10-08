
var restify = require("restify"),
    queryString = require("querystring"),
    configAll = require("../config");

var config = configAll.uberConfig,
    endpoints = configAll.endpoints,
    locations = configAll.locations;

var uberClientV1 = restify.createJsonClient({
  url: config.baseUrl,
  headers: {
    'Authorization' : ['Token ', config.server_token].join('')
  }
});


//private method
var uberGet = function(options, callback){
   uberClientV1.get(options.url, function(err, req, res, data){
    return callback(err, data);
  }); 
}



//public methods
var getProducts = function(options, callback){

  var options ={
    path: [endpoints.products, queryString.stringify(options.queryObj)].join('')
  };

  uberGet({url: options.path}, function(err, data){
    return callback(err, data);
  });
}//end of getProducts 



var getTime = function(options, callback){

  var options = {
    path: [endpoints.time, queryString.stringify(options.queryObj)].join('')
  };

  uberGet({url: options.path}, function(err, data){
    return callback(err, data);
  });
}//end of getTime 


var getPrice = function(options, callback){

  var options = {
    path: [endpoints.price, queryString.stringify(options.queryObj)].join('')
  };

  uberGet({url: options.path}, function(err, data){
    return callback(err, data);
  });
}//end of getPrice 



var getPrice_Throw = function(options, callback){
  //imagine you have a throw somewhere in your code
  throw new Error('something bad happened');
  return;
}//end of get getprice_thrown


var getPrice_callback_error = function(options, callback){
  return callback('passing error upwardly');
}







module.exports = {
  getProducts: getProducts,
  getTime: getTime,
  getPrice: getPrice,
  getPrice_Throw: getPrice_Throw,
  getPrice_callback_error: getPrice_callback_error
}





